import React from 'react';
import Bio from '../components/Bio';
import Helmet from 'react-helmet';

const Team = () => (
  <div>
    <Helmet>
      <title>Meet Our Team</title>
      <meta
        property="og:title"
        content="Center for Better Learning | Meet Our Team"
      />
      <meta
        property="og:description"
        content="Dr. Christina Murray, O.D., Renee Wise - Lead Vision Therapist, Paul Murray - Operations Manager"
      />
      <meta
        name="description"
        content="Dr. Christina Murray, O.D., Renee Wise - Lead Vision Therapist, Paul Murray - Operations Manager"
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
                    "Dr. Murray is originally from Columbus, Ohio, and is a proud graduate of The Ohio State University. She happily escaped the cold Ohio winters to attend optometry school at Nova Southeastern University. While in school, she discovered her passion for pediatrics and vision therapy. Dr. Murray's passion for helping children and adults reach their full potential through vision therapy has inspired her to open Center for Better Learning. She is currently finishing up her board certification from the College of Optometrists in Vision Development.",
                    'When not seeing patients, Dr. Murray enjoys spending time with her husband, Paul, daughter, Mia, and two adorable golden retrievers, Sadie and Bentley. Her favorite activities include reading, baking, traveling.'
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
                {/* <img
                className="bioimg card-img-top"
                src=""
                alt="Renee Wise"
              /> */}
              </div>
              <div className="col-md-8">
                <Bio
                  name="Renee Wise"
                  role="Lead Vision Therapist"
                  bio={[
                    "Renee has volunteered and worked with children in a variety of settings for 17 years. In addition to working with neuro-typical children, she also has extensive experience working with children who have mental, physical, and learning challenges such as: Autism Spectrum Disorder, Down's Syndrome, various Developmental Disorders, Cerebral Palsy, Muscular Dystrophy, Deafness, Hard of Hearing, and Blindness.",
                    'After 8 years of working and training as a Vision Therapist, Renee is proud to continue her growth and understanding of Optometric Vision Therapy.'
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
                {/* <img className="bioimg card-img-top" src="" alt="Paul Murray" /> */}
              </div>
              <div className="col-md-8">
                <Bio
                  name="Paul Murray"
                  role="Operations Manager"
                  bio={[
                    "Paul's professional career spans 10+ years in the sales industry selling a wide variety of products and managing teams of sales professionals around the country. Paul's ambition to help people naturally lead him to support Dr. Murray at the Center for Better Learning to provide Vision Therapy services in the tri-county area.",
                    "When Paul isn't working, he enjoys spending time with his newborn daughter, being outside, and playing with his dogs."
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
