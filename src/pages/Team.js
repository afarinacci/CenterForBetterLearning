import React from 'react';
import Bio from '../components/Bio';
import Helmet from 'react-helmet';
import paulmurray from '../images/paul_murray.jpeg';
import loribaron from '../images/IMG_3998.JPG';
import juanordonez from '../images/IMG_3960.JPG';
import abidkhan from '../images/IMG_3983.JPG';
import francobattistini from '../images/IMG_3993.JPG';
//import taylorsintay from '../images/IMG_.JPG';
import alyssacavalieri from '../images/IMG_3969.JPG';
import jerivonna from '../images/IMG_3965.JPG';

const Team = () => (
  <div>
    <Helmet>
      <title>Meet Our Team</title>
      <meta
        property="og:title"
        content="Center for Better Learning | Meet Our Team"
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content="Dr. Christina Murray, Paul Murray - Operations Manager"
      />
      <meta
        name="description"
        content="Dr. Christina Murray, O.D., Paul Murray - Operations Manager"
      />
      <meta
        property="og:url"
        content="https://www.centerforbetterlearning.com/our-team"
      />
      <meta
        property="twitter:image"
        content="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/422/2018/04/UKKXIPXYVTEA.IMAGE_4.jpeg"
      />
      <meta
        property="og:image"
        content="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/422/2018/04/UKKXIPXYVTEA.IMAGE_4.jpeg"
      />
    </Helmet>
    <div className="marginfornav">
      <div className="wideSectionBannerPrimary">
        <h1 className="text-center pageTitleOnDark">Meet Our Team</h1>
      </div>
      <main className="container-fluid paddingAround max800">
        <div className="biocard">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4 my-auto text-center">
                <img
                  className="bioimg card-img-top"
                  src="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/422/2018/04/UKKXIPXYVTEA.IMAGE_4.jpeg"
                  alt="Dr. Christina Murray, O.D."
                />
              </div>
              <div className="col-md-8">
                <Bio
                  name="Dr. Christina Murray, O.D."
                  bio={[
                    "Dr. Christina Murray OD, FCOVD, is a board-certified optometrist in vision development. She is a proud graduate of both The Ohio State University and Nova Southeastern University. Since she was a child, Dr. Murray wanted to be an eye doctor but developed a passion for working with those with vision problems when she discovered deficits in her own visual system as an adult. Over the years, she has spent her post-graduate years studying primitive reflexes, syntonics light therapy, and exploring how the brain processes visual information. Dr. Murray is on a mission to bring awareness to how vision problems affect a child's ability to read and learn. She is actively working with parents, legislators, and the school board to change the laws to consider visual processing disorders a disability. Expanding the law will allow for better coverage by medical insurance plans and children to get the accommodations they need in the classroom.",
                    'Dr. Murray opened Center for Better Learning in 2018 and has expanded to three office locations in Coconut Creek, Boynton Beach, and Palm Beach Gardens. She works very closely with occupational therapists, physical therapists, speech therapists, cranial-sacral therapists, and tutors to provide comprehensive care for each patient. Her dream is to eventually open an office location where she can work side by side with other health care professionals in a collaborative way.',
                    'Dr. Christina Murray lives in Boca Raton with her husband, Paul, two daughters, Amelia and Emma, and two golden retrievers, Sadie and Bentley. When she is not seeing patients, she enjoys reading, baking, and spending time with her family. As an avid runner, biker, and swimmer, she hopes her kids will allow her enough time to train for a half iron man this year.',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="biocard">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4 my-auto text-center">
                <img
                  className="bioimg card-img-top"
                  src={loribaron}
                  alt="Lori Baron, BS, COVT"
                />
              </div>
              <div className="col-md-8">
                <Bio
                  name="Lori Baron, BS, COVT"
                  role="Lead Vision Therapist"
                  bio={[
                    'Lori was born and raised in sunny, south Florida. She went to Florida Atlantic University where she received her BS degree in Biological Sciences. She’s been interested in helping people of all ages meet their vision therapy and educational goals for over 10 years. As her love for Vision Therapy grew, she became certified as a Vision Therapist from the College of Optometrists in Vision Development.  Lori’s passion is working with special populations, gifted individuals, athletes, brain injury, strabismus, and amblyopia patients to help them succeed at work and school.',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="biocard">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4 my-auto text-center">
                <img
                  className="bioimg card-img-top"
                  src={alyssacavalieri}
                  alt="Alyssa Cavalieri, OVT"
                />
              </div>
              <div className="col-md-8">
                <Bio
                  name="Alyssa Cavalieri, OVT"
                  role="Vision Therapist"
                  bio={[
                    'Alyssa was born and raised in South Florida. She is in the process of becoming a certified vision therapist, while also in school pursing her degree in occupational therapy. Alyssa has always had a passion for helping others and working with young children. She personally takes joy in working with traumatic brain injury, stroke, and special population patients.',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="biocard">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4 my-auto text-center">
                <img
                  className="bioimg card-img-top"
                  src={juanordonez}
                  alt="Juan Ordonez, BS, OVT"
                />
              </div>
              <div className="col-md-8">
                <Bio
                  name="Juan Ordonez, BS, OVT"
                  role="Vision Therapist"
                  bio={[
                    "Juan was born in Bogota, Colombia and lived there for six years before emigrating to South Florida with his immediate family. He attended Florida Atlantic University, where he earned his Bachelor's degree in Biological Sciences while minoring in Psychology. He discovered his passion for therapy while attending FAU and working at the Louis and Anne Green Memory and Wellness Center, where he assisted in activities and exercises for participants with dementia and other related illnesses.",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="biocard">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4 my-auto text-center">
                <img
                  className="bioimg card-img-top"
                  src={francobattistini}
                  alt="Franco Battistini, OVT"
                />
              </div>
              <div className="col-md-8">
                <Bio
                  name="Franco Battistini, OVT"
                  role="Vision Therapist"
                  bio={[
                    "Franco was born and raised in Lima, Peru. He moved to South Florida when he was only 9 years old, seeking to pursue a new life with a lot of opportunities. Franco is currently enrolled at Florida Atlantic University where he will be receiving a bachelor’s degree in Exercise Science. His passion has always been to help people in all aspects of health, to improve a person's well-being. He loves helping people better themselves physically and mentally, which is why he discovered his love for Vision and Performance Therapy.",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="biocard">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4 my-auto text-center">
                <img
                  className="bioimg card-img-top"
                  src={abidkhan}
                  alt="Abid Khan, BS, OVT"
                />
              </div>
              <div className="col-md-8">
                <Bio
                  name="Abid Khan, BS, OVT"
                  role="Vision Therapist"
                  bio={[
                    "Abid was born and raised in South Florida. He received his Bachelor's degree from The Florida State University majoring in Biology with a minor in Psychology. Growing up he developed his passion to heal others in any chance he could get. Being from the Bengali community that he was raised in he was taught to always help others in any way shape or form which is why he loves the work he does here.",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="biocard">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4 my-auto text-center">
                <img
                  className="bioimg card-img-top"
                  src={jerivonna}
                  alt="Jerivonna aka Jeri, OVT"
                />
              </div>
              <div className="col-md-8">
                <Bio
                  name="Jerivonna aka Jeri, OVT"
                  role="Vision Therapist"
                  bio={[
                    'Jeri was born in a small town in Georgia named Tifton and moved to West Palm Beach when she was 4 years old. She is a graduate of the class of 2021 and is going to Mercer University this fall. She is majoring in chemistry and is on the pathway of pre-optometry. Having memories of the country/farm life to the city she became a well-rounded person, open minded, easy person to talk to, and a person to follow what’s right.',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="biocard">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4 my-auto text-center">
                {/*<img
                  className="bioimg card-img-top"
                  src={juanordonez}
                  alt="Juan Ordonez, BS, OVT"
                />
                */}
              </div>
              <div className="col-md-8">
                <Bio
                  name="Taylor Sintay, BA"
                  role="Office Coordinator"
                  bio={[
                    "Taylor if from South Florida. She graduated from Florida Atlantic University with a bachelor's degree in Sociology, Spring of 2020. Her passion has always been to help others and she has been working with children in various settings for over a decade. Her goal in both life and work is to be a positive role model and inspiration to others. ",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="biocard">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4 my-auto text-center">
                <img
                  className="bioimg card-img-top"
                  src={paulmurray}
                  alt="Paul Murray"
                />
              </div>
              <div className="col-md-8">
                <Bio
                  name="Paul Murray"
                  role="Operations Manager"
                  bio={[
                    "Paul's professional career spans 10+ years in the sales industry selling a wide variety of products and managing teams of sales professionals around the country. Paul's ambition to help people naturally lead him to support Dr. Murray at the Center for Better Learning to provide Vision Therapy services in the tri-county area.",
                    "When Paul isn't working, he enjoys spending time with his newborn daughter, being outside, and playing with his dogs.",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default Team;
