import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Bad Accessibility is worse than no accessibility</h1>
        <p>The goal of this website is to prove that you can have a perfect score regarding accessibility and SEO in Web Vitals, as well as automated tools audit passing for accessibility tests and still have a <strong>poor accessibility experience for users.</strong> Check some examples below:</p>

        <h2>1. Images and Alternative Texts</h2>

        <div className="imagesContainer">
          <img
            src="https://images.pexels.com/photos/9123067/pexels-photo-9123067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Picture of a tall blond woman, wearing a beautiful brown dress and white tennis shoes, standing in front of a commercial stablishment named Orpheum and which has a lettering saying 'Every human is an artist. The dream of your life is to make beautiful art."
            width="360"
          />

          <img
            src="https://images.pexels.com/photos/6996360/pexels-photo-6996360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="two women and a baking machine"
            width="360"
          />

          <img
            src="https://images.pexels.com/photos/16378938/pexels-photo-16378938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="pexels-photo-16378938.jpeg"
            width="360"
          />
        </div>

        <p>The first picture has an extremely wordy alternative text, which is going to take a lot of time for assistive technologies to read and that has a lot of information that is not necessary.</p>

        <p>The second picture has an alternative text that provides almost no information regarding the image. Does it provide the required context for people using asssitive technologies? </p>

        <p>The third picture has an alternative text that is the name of the picture file - no description, but which will be read by assistive technologies.</p>

        <h2>2. Aria Hidden</h2>

        <p>Aria Hidden is used to hide content from assistive technologies in order to improve the experience. Also, tabIndex can be set to prevent focus on interactive elements. However, if it is used to hide essential content, people using those technologies will not be able to access them - for instance, promotions and coupons.</p>
        
        <div className="banner" aria-hidden>
          <p>Promotion: click button below for discount</p>
          <button type="button" tabIndex={-1}>Get Discount</button>
        </div>

        <h2>3. Forms</h2>

        <p>
          Visual Bias makes us believe that some form are functional and compreensible.
          <br />
          However, focus order is different from what we visually see and this form is going to intercalete address fields with unrelated ones. Try tabbing.
        </p>

        <form>
          <div>
            <input type="text" placeholder="Name" aria-label="Name" />
            <input type="text" placeholder="Street" aria-label="Address 1" />
          </div>
          <div>
            <input type="text" placeholder="E-mail" aria-label="E-mail"  />
            <input type="text" placeholder="Neighborhood" aria-label="Address 2"  />
          </div>
          <div>
            <input type="text" placeholder="Phone Number" aria-label="Phone Number"  />
            <input type="text" placeholder="City" aria-label="Address 3"  />
          </div>

          <button type="button">Enviar</button>
        </form>

        <h2>And more...</h2>

        <p>
          What is shown here are just some practical examples of bad accessibility with valid markup.
          <br />
          Good accessibility requires <strong>empathy</strong> and <strong>testing with real users</strong>.
        </p>
      </main>
    </>
  )
}
