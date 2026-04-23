(function () {
    let dataElement = document.getElementById("note-search-data");
    let dialog = document.getElementById("note-search-dialog");
    let openBtn = document.getElementById("open-note-search");
    let closeBtn = document.getElementById("close-note-search");
    let input = document.getElementById("note-search-input");
    let results = document.getElementById("note-search-results");

    if (!dataElement || !dialog || !openBtn || !closeBtn || !input || !results) {
        return;
    }

    let notesIndex = [];
    let activeResults = [];

    try {
        notesIndex = JSON.parse(dataElement.textContent || "[]");
    } catch (err) {
        notesIndex = [];
        console.error("Note search index failed to parse", err);
    }

    function scoreNote(note, query) {
        let q = query.toLowerCase();
        let title = String(note.title || "").toLowerCase();
        let className = String(note.className || "").toLowerCase();
        let text = String(note.text || "").toLowerCase();
        let combined = (title + " " + className + " " + text).trim();
        let tokens = q.split(/\s+/).filter(Boolean);
        let score = 0;

        if (!tokens.length) {
            return 0;
        }

        for (let i = 0; i < tokens.length; i += 1) {
            if (combined.indexOf(tokens[i]) === -1) {
                return 0;
            }
        }

        if (title === q) score += 140;
        if (title.indexOf(q) === 0) score += 90;
        if (title.indexOf(q) !== -1) score += 60;
        if (className.indexOf(q) !== -1) score += 30;
        if (text.indexOf(q) !== -1) score += 12;

        score += Math.max(0, 20 - title.length / 10);

        return score;
    }

    function findMatches(query) {
        if (!query) {
            return [];
        }

        return notesIndex
            .map(function (note) {
                return {note: note, score: scoreNote(note, query)};
            })
            .filter(function (entry) {
                return entry.score > 0;
            })
            .sort(function (a, b) {
                return b.score - a.score;
            })
            .slice(0, 8)
            .map(function (entry) {
                return entry.note;
            });
    }

    function clearResults() {
        while (results.firstChild) {
            results.removeChild(results.firstChild);
        }
    }

    function openSearch() {
        dialog.hidden = false;
        document.body.classList.add("note-search-open");
        input.focus();
        input.select();
        renderResults(input.value.trim());
    }

    function closeSearch() {
        dialog.hidden = true;
        document.body.classList.remove("note-search-open");
        openBtn.focus();
    }

    function renderResults(query) {
        activeResults = findMatches(query);
        clearResults();

        if (!query) {
            let emptyPrompt = document.createElement("li");
            emptyPrompt.className = "note-search-empty";
            emptyPrompt.textContent = "Start typing to search all notes.";
            results.appendChild(emptyPrompt);
            return;
        }

        if (!activeResults.length) {
            let noResults = document.createElement("li");
            noResults.className = "note-search-empty";
            noResults.textContent = "No notes match that search.";
            results.appendChild(noResults);
            return;
        }

        activeResults.forEach(function (note, idx) {
            let li = document.createElement("li");
            li.className = "note-search-item";
            if (idx === 0) {
                li.classList.add("is-top-result");
            }

            let link = document.createElement("a");
            link.href = note.url;
            link.className = "note-search-result-link";

            let title = document.createElement("span");
            title.className = "note-search-result-title";
            title.textContent = note.title || "Untitled note";

            let meta = document.createElement("span");
            meta.className = "note-search-result-meta";
            meta.textContent = note.className || "Uncategorized";

            link.appendChild(title);
            link.appendChild(meta);
            li.appendChild(link);
            results.appendChild(li);
        });
    }

    function goToTopResult() {
        if (activeResults.length) {
            window.location.href = activeResults[0].url;
        }
    }

    function isTypingTarget(target) {
        if (!target) {
            return false;
        }

        let tag = String(target.tagName || "").toLowerCase();
        return target.isContentEditable || tag === "input" || tag === "textarea" || tag === "select";
    }

    openBtn.addEventListener("click", function () {
        openSearch();
    });

    closeBtn.addEventListener("click", function () {
        closeSearch();
    });

    dialog.addEventListener("click", function (event) {
        if (event.target === dialog) {
            closeSearch();
        }
    });

    input.addEventListener("input", function () {
        renderResults(input.value.trim());
    });

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            goToTopResult();
            return;
        }

        if (event.key === "Escape") {
            event.preventDefault();
            closeSearch();
        }
    });

    function handleGlobalShortcuts(event) {
        let key = String(event.key || "").toLowerCase();

        if ((event.ctrlKey || event.metaKey) && key === "k") {
            if (event.cancelable) {
                event.preventDefault();
            }
            event.stopPropagation();
            if (typeof event.stopImmediatePropagation === "function") {
                event.stopImmediatePropagation();
            }
            openSearch();
            return;
        }

        if (!event.ctrlKey && !event.metaKey && key === "/" && !isTypingTarget(event.target)) {
            if (event.cancelable) {
                event.preventDefault();
            }
            openSearch();
            return;
        }

        if (key === "escape" && dialog.hidden === false) {
            closeSearch();
        }
    }

    window.addEventListener("keydown", handleGlobalShortcuts, true);
    document.addEventListener("keydown", handleGlobalShortcuts);
})();
