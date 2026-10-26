---
layout: page
title: Resources and Documentation for Editing the SOSP Website
permalink: /meta/
---

## About The SOSP Website

The website is built using [Jekyll](https://jekyllrb.com/) -- a static site generator.[^ssg]

[^ssg]: A static site generator is a tool that creates an HTML-based website from documents that contain content. The SSG handles the conversion of the content into HTML and generates links between documents, etc. Jekyll is not the only SSG -- [there are plenty of others](https://jamstack.org/generators/).

Thanks to the integration of this repository with Cloudflare, any commits you make that add/remove/edit content will trigger an automatic rebuild of the website. In other words, you can contribute to the website without knowing another thing about Jekyll. However, if you are interested in learning more, see [Building](#building), below!

### Building

As mentioned above, you can absolutely edit the content of this website without using/installing Jekyll. However, if you are interested in installing Jekyll on your computer, you can preview the website in real time. Read on for instructions on how to do that!

First, make sure you have installed Jekyll locally. There are great [instructions online](https://jekyllrb.com/docs/installation/) for how do to that.

Once you have Jekyll installed, you can preview the format of the website in real time as you make edits to the content.

```console
$ bundle exec jekyll serve
```

## Using git To Edit The SOSP Website
Resources you will find helpful when using `git` to edit the SOSP website:

**Coming Soon**

## Using Markdown To Format Content For The SOSP Website

All content for the website is authored in [Markdown](https://daringfireball.net/projects/markdown/). Markdown is a basic set of syntax to express formatting in plain-text documents -- "[t]he idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions."[^md]

There are several great resources for learning how to write Markdown:

- [A syntax guide](https://daringfireball.net/projects/markdown/syntax) from the person who pioneered Markdown.
- [A syntax guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) from Github.

[^md]: "Daring Fireball: Markdown." Accessed: Sep. 28, 2026. [Online]. Available: [https://daringfireball.net/projects/markdown/](https://daringfireball.net/projects/markdown/)
