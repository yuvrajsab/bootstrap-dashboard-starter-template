# Bootstrap Dashboard Starter Template 

A simple Bootstrap css dashboard starter template for building web applications quickly without getting into much hassle of designing.

## Screenshots

![dashboard](https://github.com/yuvrajsab/bootstrap-dashboard-starter-template/blob/master/screenshot.png)

## Development

This project is built using [Bootstrap 5](https://getbootstrap.com/), [Nunjucks](https://mozilla.github.io/nunjucks/), and [Parcel Bundler](https://v1.parceljs.org/). Before you can start development you need to take care of a few prerequisites.

### Installing Prerequisites

#### Using apt package manager (Debian/Ubuntu)

```bash
sudo apt install nodejs npm
```

### Clone Project

You can simply clone the project using git as:

```bash
git clone https://github.com/yuvrajsab/bootstrap-dashboard-starter-template
```

or you can download ZIP and extract it.

### Build

switch into project directory
```bash
cd bootstrap-dashboard-starter-template
```

#### Install project dependencies

```bash
npm install
```

#### Running in development enviornment

```bash
npm run dev
```

This will build the project in dev mode and start a local server on `localhost:1234`

#### Building for production use

```bash
npm run build
```

This will generate `build` directory containing all the compiled and minified code.


## FAQ

1. Why are you using Parcel v1 instead of v2?

Parcel v2 currently as of 20/10/2021 has some problems like it doesn't let you remove `content hash` from your assets filename and some problem with livereload.

2. Why is there `scss/` directory for `css` files when I build the project in production?

It's a bug actually, I couldn't rename it to `css` on build so you have to do that manually.

3. What if I wanted to use this in some server side applications.

It's just a `html` template, you can build the project using `npm run build` and copy `css` and `js` files to your server app.
