import React from 'react';
import Bio from '../components/Bio';

const Team = () => (
  <div className="marginfornav">
    <main className="container-fluid paddingAround max800">
      <h1 className="text-center pageTitle">Meet Our Team</h1>

      <div className="biocard">
        <Bio
          name="Dr. Christina Murray, O.D."
          bio={[
            "Dr. Murray is originally from Columbus, Ohio, and is a proud graduate of The Ohio State University. She happily escaped the cold Ohio winters to attend optometry school at Nova Southeastern University. While in school, she discovered her passion for pediatrics and vision therapy. Dr. Murray's passion for helping children and adults reach their full potential through vision therapy has inspired her to Center for Better Learning. She is currently finishing up her board certification from the College of Optometrists in Vision Development.",
            'When not seeing patients, Dr. Murray enjoys spending time with her husband, Paul, daughter, Mia, and two adorable golden retrievers, Sadie and Bentley. Her favorite activities include reading, baking, traveling.'
          ]}
          url="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/422/2018/04/UKKXIPXYVTEA.IMAGE_4.jpeg"
        />
      </div>

      <div className="biocard">
        <Bio
          name="Renee Wise"
          role="Lead Vision Therapist"
          bio={[
            "Renee has volunteered and worked with children in a variety of settings for 17 years. In addition to working with neuro-typical children, she also has extensive experience working with children who have mental, physical, and learning challenges such as: Autism Spectrum Disorder, Down's Syndrome, various Developmental Disorders, Cerebral Palsy, Muscular Dystrophy, Deafness, Hard of Hearing, and Blindness.",
            'After 8 years of working and training as a Vision Therapist, Renee is proud to continue her growth and understanding of Optometric Vision Therapy.'
          ]}
          url="https://media.istockphoto.com/photos/female-portrait-icon-as-avatar-or-profile-picture-picture-id477333976?k=6&m=477333976&s=612x612&w=0&h=A5lI_2KJbVjyQpNsaCDWAR3jj-CLV1kqI6ObClYf4e4="
        />
      </div>

      <div className="biocard">
        <Bio
          name="Paul Murray"
          role="Operations Manager "
          bio={[
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.',
            'Voluptatum ducimus voluptates voluptas?'
          ]}
          url="https://media.istockphoto.com/photos/icon-of-a-businessman-avatar-or-profile-pic-picture-id474001892?k=6&m=474001892&s=612x612&w=0&h=6g0M3Q3HF8_uMQpYbkM9XAAoEDym7z9leencMcC4pxo="
        />
      </div>
    </main>
  </div>
);

export default Team;
