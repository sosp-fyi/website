## SOSP.fyi

This repository contains the source code for the [sosp.fyi](https://www.sosp.fyi) website.

### Building

The website is built using [Jekyll](https://jekyllrb.com/), a well-known [static site generator](https://en.wikipedia.org/wiki/Static_site_generator). All content is written in [markdown](https://daringfireball.net/projects/markdown/syntax) and converted to HTML by Jekyll.

After you make changes to the content of the website on your local development environment, you _can_ run Jekyll locally to preview changes:[^install]


```console
$ bundle exec jekyll serve
```

However, it is not _necessary_. It is enough to edit the content of the markdown files that make up the site and contribute those changes (see [Contributing](#contributing)).

[^install]: Of course, that means you will have to have [installed Jekyll](https://jekyllrb.com/docs/installation/) first.

### Contributing

We would love to have you contribute! Here's the best way to submit updates:

1. [_Fork_](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) this repository to a repository hosted on GitHub.
2. Make any changes to the website that you would like.
3. [_Commit_](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits) those changes to your fork of the repository.
4. [_Push_](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository) that commit to your fork on GitHub.
4. Open a [_pull request_](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) at _this_ repository.

Once you have resolved all the feedback on your PR and two people approve it, your changes will go live on the website!