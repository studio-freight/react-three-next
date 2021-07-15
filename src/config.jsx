import Head from "next/head"

const titleDefault = "React Three Next Starter"
const url = "https://react-three-next.vercel.app/"
const description =
  "The easiest and fastest way to create a 3D website using React Three Fiber and NextJS"
const author = "Author"

const Header = ({ title = titleDefault }) => {
  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="author" content={author} />
        <meta name="designer" content={author} />
        <meta name="publisher" content={author} />

        {/* Search Engine Optimization Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist"
        />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="distribution" content="web" />
        {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
        <meta name="og:title" content={title} />
        <meta name="og:type" content="site" />
        <meta name="og:url" content={url} />
        <meta name="og:site_name" content={title} />
        <meta name="og:description" content={description} />

        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, initial-scale=1.0"
        />
        <meta name="theme-color" content="#000" />
      </Head>
    </>
  )
}

export default Header
