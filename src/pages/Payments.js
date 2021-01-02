import React from 'react';
import Helmet from 'react-helmet';

const Payments = () => (
  <div>
    <Helmet>
      <title>Payment Options</title>
      <meta
        property="og:title"
        content="Center for Better Learning | Payment Options"
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content="Payment options for our Center for Better Learning vision therapy services."
      />
      <meta
        name="description"
        content="Payment options for our Center for Better Learning vision therapy services."
      />
      <meta
        property="og:url"
        content="https://www.centerforbetterlearning.com/our-team"
      />
      <meta
        property="twitter:image"
        content="https://lh3.googleusercontent.com/XwqIxTOPh1RD7y8ZStQLytJ4CHpbvEdh3fHuQI1dz-oO6DG14Tn8hfIZEK-YKVds6HLYkum_h3YrgLkKmchSjGBhphjnmg5bjBXE8nTOCWvzVwqyb6yg4vY12VN_2gFoRVTc0zg3Vtc=w1200"
      />
      <meta
        property="og:image"
        content="https://lh3.googleusercontent.com/XwqIxTOPh1RD7y8ZStQLytJ4CHpbvEdh3fHuQI1dz-oO6DG14Tn8hfIZEK-YKVds6HLYkum_h3YrgLkKmchSjGBhphjnmg5bjBXE8nTOCWvzVwqyb6yg4vY12VN_2gFoRVTc0zg3Vtc=w1200"
      />
    </Helmet>
    <div className="marginfornav">
      <div className="wideSectionBannerPrimary">
        <h1 className="text-center pageTitleOnDark">Payment Options</h1>
      </div>
      <main className="container-fluid paddingAround max800">
        <p>
          At Center for Better Learning, our goal is to provide the best in
          vision evaluations and vision therapy. Payment is due at the time of
          service. We accept cash, checks, debit cards, Master Card, Visa,
          Discover, American Express, and Care Credit.
        </p>
        <br />
        <h3>INSURANCE FOR COMPREHENSIVE EYE EXAM SERVICES</h3>
        <p>
          Center for Better Learning works with all types of insurance on an{' '}
          <b>"open network basis"</b>. As an <b>open-access provider</b>, we are{' '}
          <b>not in-network</b> but we can provide you with services/materials
          and still utilize your insurance benefits/coverage. If you provide us
          with a few pieces of information, we are able to pull your insurance
          eligibility and coverage and let you know how much you will pay for
          services and how much insurance will reimburse you directly.
        </p>
        <p>
          Because we are an open network practice, we are not confined to the
          rules of your insurance policy. We have the ability to carefully
          select the labs we wish to work with to ensure that you get high
          quality services and materials without the fear that it will break in
          a couple of months. We pride ourselves in the care we provide!
        </p>
        <br />
        <h3>INSURANCE FOR VISION THERAPY SERVICES</h3>
        <p>
          We will provide a receipt containing the information you will need to
          file with your medical insurance company. We will provide a "letter of
          medical necessity", with all procedure and diagnosis codes.
          Unfortunately, not many insurance companies cover the cost of vision
          therapy. To reduce costs, most exclude the service as "educationally
          related".
        </p>
        <p>
          Our programs are custom, and each patient and duration of treatment
          depends on individual goals. We continue until your visual abilities
          are second nature enough to hold when we are finished. To continue
          changing lives, we insist on the excellence of our care.
        </p>
        <p>
          We,therefore, do not act as a participating provider for any insurance
          plan. Dr. Murray is unwilling for an insurance company's arbitrary
          policies to prevent the excellence we expect. None of us can afford
          wasting time and expense on mediocre care whose results may not hold
          over time. At Center for Better Learning, we insist on providing the
          life-changing results for all patients enrolled in our therapy
          programs.
        </p>
        <br />
        <h3>Flexible Spending Accounts</h3>
        <p>
          Many employers are offering Flexible Spending Account (FSA) options to
          employees. Vision Therapy generally qualifies as a medically necessary
          service for FSAs or Health Spending Accounts (HSAs). These plans are
          designed to let you save money in an account, pre-tax, to pay for
          additional medical expenses such as vision therapy. Check with the
          benefits administrator at your work to see if you are eligible for
          this program. FSAs or HSAs can typically be used to offset
          out-of-pocket costs on your behalf.
        </p>
      </main>
    </div>
  </div>
);

export default Payments;
