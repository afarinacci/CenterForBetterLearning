import React from 'react';
import Bio from '../components/Bio';

const Team = () => (
  <div className="row">
    <div className="col-md-6 col-lg-4">
      <div className="biocard">
        <Bio 
        name="Dr. Christina Murray, O.D." 
        bio="Dr. Murray is originally from Columbus, Ohio, and is a proud graduate of The Ohio State University. She happily escaped the cold Ohio winters to attend ... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?" 
        url='https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/422/2018/04/UKKXIPXYVTEA.IMAGE_4.jpeg' />
      </div>
    </div>
    <div className="col-md-6 col-lg-4">
      <div className="biocard">
        <Bio 
        name="Renee" role="Lead Vision Therapist" 
        bio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quasi cupiditate. Voluptatum ducimus voluptates voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?" 
        url='https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/422/2018/04/UKKXIPXYVTEA.IMAGE_4.jpeg' />
      </div>
    </div>
    <div className="col-md-6 col-lg-4">
      <div className="biocard">
        <Bio 
        name="Paul Murray" role="Operations Manager " 
        bio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?" 
        url='https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/422/2018/04/UKKXIPXYVTEA.IMAGE_4.jpeg' />
      </div>
    </div>
  </div>
);

export default Team;