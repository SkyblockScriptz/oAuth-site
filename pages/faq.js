import Head from 'next/head'

function faq() {
  return (
    <div className="container">
      <Head>
        <title>Verify Your Discord</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>FAQ</h1>
        <h2>Why is it this verification?</h2>
        <desc>Instead of relying on the verification with discords linked to your hypixel account, we decided to use the new microsoft verification system.</desc>
        <desc>(You will allow our bot to access your username, discord live tag due to discord being shut down and your profile picture)</desc>
        <h2>What is login.live.com?</h2>
        <desc>Login.live.com is a microsoft site, if you don't want to log in (due to the domain sounding sketchy) there you can go to https://account.microsoft.com/ login there</desc>
        <desc>and then you will be automatically redirected without having to log in (when you click "Click here to verify")</desc>
        <h2>How long does it take to verify?</h2>
        <desc>It should at max take 2-3</desc>
        <p></p>
        <h1>
        <a href='https://hypixelauthenticator.vercel.app'>Click me to go back</a>
        </h1>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          color: #CE93D8;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          color: #CE93D8;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          text-align: left;
          color: #CE93D8;
          text-decoration: none;
          border: 1px solid #CE93D8;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #7B1FA2;
          border-color: #7B1FA2;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          background-color: #121212;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default faq
