## SOSP.fyi

This repository contains the source code for the [sosp.fyi](https://www.sosp.fyi) website.

### Authoring Resources

The website is built using [Jekyll](https://jekyllrb.com/) -- a static site generator.[^ssg]

[^ssg]: A static site generator is a tool that creates an HTML-based website from documents that contain content. The SSG handles the conversion of the content into HTML and generates links between documents, etc. Jekyll is not the only SSG -- [there are plenty of others](https://jamstack.org/generators/).

Thanks to the integration of this repository with Cloudflare, any commits you make that add/remove/edit content will trigger an automatic rebuild of the website. In other words, you can contribute to the website without knowing another thing about Jekyll. However, if you are interested in learning more, see [Building](#building), below!

All content for the website is authored in [Markdown](https://daringfireball.net/projects/markdown/). Markdown is a basic set of syntax to express formatting in plain-text documents -- "[t]he idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions."[^md]

There are several great resources for learning how to write Markdown:

- [A syntax guide](https://daringfireball.net/projects/markdown/syntax) from the person who pioneered Markdown.
- [A syntax guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) from Github.

[^md]: "Daring Fireball: Markdown." Accessed: Sep. 28, 2026. [Online]. Available: https://daringfireball.net/projects/markdown/

### Building

As mentioned above, you can absolutely edit the content of this website without using/installing Jekyll. However, if you are interested in installing Jekyll on your computer, you can preview the website in real time. Read on for instructions on how to do that!

First, make sure you have installed Jekyll locally. There are great [instructions online](https://jekyllrb.com/docs/installation/) for how do to that.

Once you have Jekyll installed, you can preview the format of the website in real time as you make edits to the content.

```console
$ bundle exec jekyll serve
```

### Contributing

We would love to have you contribute! Here's the best way to submit updates:

1. [_Fork_](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) this repository to a repository hosted on GitHub.
2. Make any changes to the website that you would like.
3. [_Commit_](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits) those changes to your fork of the repository.
4. [_Push_](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository) that commit to your fork on GitHub.
4. Open a [_pull request_](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) at _this_ repository.

Once you have resolved all the feedback on your PR and two people approve it, your changes will go live on the website!