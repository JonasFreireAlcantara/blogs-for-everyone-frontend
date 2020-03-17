# Blogs for Everyone

Blogs for Everyone aims to be Content Management System for personal blogs

## About this project

When i was developing my first blog from scratch using React, Express, Node, Mongoose technologies i had decided to create this CMS to help someone which desires to create and maintaing your own blog in an easy way.

This project was designed to adapt the content for your needs but you will have to setup some configurations before.

## Frontend

This repository refers to the frontend part of the project which in this case is a Single Page Application built with [React](https://reactjs.org/), to you setup the backend see the readme file of [backend](https://github.com/JonasFreireAlcantara/blogs-for-everyone-backend) part of this project.

## Project frontend resources

The resources which this frontend utilize is:

- A [Blogs for Everyone backend](https://github.com/JonasFreireAlcantara/blogs-for-everyone-backend) running;
- A [Disqus](https://disqus.com/) account to save the comments for each post.

### Posts comments with Disqus

Disqus is a very useful platform of community engagement for websites, blogs, etc. For you can moderate discussions and comments in your posts the Blogs for Everyone platform utilizes the amazing Disqus platform.

You must create an account at [Disqus](https://disqus.com/), and create a new site there, you need inform the website name which will be important soon.

### Credentials configurations

After you done the previous step you have to inform the project about the credentials of the project

```
REACT_APP_BLOG_FRONTEND_DOMAIN=<your_frontend_domain>
REACT_APP_BLOG_BACKEND_DOMAIN=<your_backend_domain>

REACT_APP_DISQUS_SHORTNAME=<your_disqus_site_shortname>
```

## Content configurations

The frontend part of the project need receives some contents informations about the blog as title, about info page, etc. To edit that's informations you must edit the src > config > BlogConfiguration.js file.

##### Warning: All informations must be inside single or double quotes observe the example above.

```
export default {
  defaults: {
    pageTitle: 'My blog'
  },

  header: {
    title: 'My blog',
    logo:
      'https://images.pexels.com/photos/3787320/pexels-photo-3787320.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
  },

  footer: {
    author: 'Edmund Fair'
  },

  about: {
    title: 'About my blog',
    paragraphs: [
      'The my blog was created in 2017',
      'Here is my second paragraph',
      'And here my thirth paragraph'
    ],
    image:
      'https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
  }
};
```

#### defaults

Here you can tell to the project default information for a while the only information needed it's the pageTitle.

#### header

Contains information which are localized inside the header:

- title - the blog title;
- logo - url of an image to be the blog logo.

#### footer

Contains information which are localized inside the footer, actually only exists the author name, where you put the blog writer, which probably is your name ;)

#### about

In the Blogs for Everyone there exists a page called about where you put information about the blog itself, what you created, what is about, etc.

The informations are:

- title - mini title for your about blog page;
- paragraphs - the paragraphs separated by comma;
- image - url for some cool image, or your profile image if you want.

## Execution

You must install all project dependencies before you run for the first time the frontend, go to the project root directory and enter the follow command:

`npm install`

After that to execute this project in development mode you can run:

`npm start`

And for production you can run, which will generate the bundles ready for production in the directory build:

`npm run build`

You can now test the frontend going to the [http://localhost:3000](http://localhost:3000).
