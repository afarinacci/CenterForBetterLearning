import React from 'react';
import { Row, Col } from 'reactstrap';

function Lrvp() {
  const childFrustrated_w1200 =
    'https://lh3.googleusercontent.com/WFqgpMmgoiU2yzm6EldbDvWFcID6_4dploMQg9w95pZqVea-bjUv7iCNCaUwAAJSpiVxThGGI1ZewCOzFSBlIzBSI2EfG4atMmZo-7ihtxMFz0bYQQ3jwIWkpknDrquGVDWfxIs7Omk=w1200';
  const childFrustrated_w2400 =
    'https://lh3.googleusercontent.com/bmEJGm3tDYskIkP4S_JwFj1XRjqWMbyXQKLsPsGx5RFp8CxzhN5Ffq-Pi8gDhF9cmy1m_F1uHNzw0d-1vTOmms-lqh0jA27_VMKH0plKwATrSIolQtTNypKuLhuvoqygDWoXu6PUACk=w1597';
  return (
    <div>
      <div className="container-fluid paddingAround max800">
        <h1 className="text-center pageTitle">
          Learning Related Visual Problems
        </h1>
        <p>
          The strain of poorly developed visual skills and abilities may not
          always result in bad grades. Intelligent children that are highly
          motivated can achieve good grades, but at an untold cost in wasted
          energy; working inefficiently and under high stress. For those who are
          less motivated, one or two deficient visual skills can produce enough
          stress and frustration to create a low achiever.
        </p>
        <div className="container">
          <Row
            className="text-center grid-divider grid-divider-primary"
            style={{ color: 'var(--primary)' }}
          >
            <Col sm="12" md="6" className="my-1">
              1 in 4 children struggle with reading and learning because of
              undiagnosed vision problems.
            </Col>
            <Col sm="12" md="6" className="my-1">
              It is estimated that over 60% of "learning disabled" children have
              undiagnosed vision problems.
            </Col>
          </Row>
        </div>
        <br />

        <p>
          Reading and learning can be unnecessarily challenging for children
          with visual problems. As a result, some children develop behavioral
          problems, while others will avoid reading. Oftentimes the child is
          intelligent, causing parents to be confused by the child's
          difficulties. Vision therapy can improve visual function, so that your
          child is better equipped to understand educational instruction and
          therefore better perform.
        </p>
        <div className="container">
          <Row
            className="text-center grid-divider grid-divider-primary"
            style={{ color: 'var(--primary)' }}
          >
            <Col sm="12" md="4" className="my-1">
              80% of learning in the classroom is visual.
            </Col>
            <Col sm="12" md="4" className="my-1">
              Many vision problems that interfere with reading and learning are
              treatable.
            </Col>
            <Col sm="12" md="4" className="my-1">
              Seeing clearly ("20/20") is just one of 17 visual skills critical
              to academic success.
            </Col>
          </Row>
        </div>
        <br />

        <h5>Undiagnosed Vision Problems can lead to:</h5>
        <ul>
          <li>Misdiagnosis of learning disabilities, ADD/ADHD, and Dyslexia</li>
          <li>Poor self-esteem</li>
          <li>Fatigue, frustration and irritability</li>
          <li>Short attention span</li>
          <li>Poor grades</li>
        </ul>

        <br />
        <Row>
          <Col sm="12" md="6">
            <picture>
              <source
                media="(max-width: 450px)"
                srcSet={childFrustrated_w1200}
              />
              <source
                media="(min-width: 451px)"
                srcSet={childFrustrated_w2400}
              />
              <img
                src={childFrustrated_w2400}
                className="img-fluid"
                alt="Child frustrated with schoolwork"
              ></img>
            </picture>
          </Col>
          <Col sm="12" md="6">
            <h5 style={{ paddingTop: '20px' }}>
              Common symptoms of learning related visual problems in children
              who struggle with reading are:
            </h5>
            <ul>
              <li>Losing place on the page</li>
              <li>Words run together when reading</li>
              <li>Reversals of letters or words</li>
              <li>Easily distracted or fatigued</li>
              <li>Takes "hours" to do homework</li>
              <li>Low reading comprehension or fluency</li>
              <li>Poor or unevenly spaced handwriting</li>
              <li>Uses finger to keep place</li>
              <li>Eye fatigue or strain</li>
            </ul>
          </Col>
        </Row>
        <br />
      </div>
      <h4 className="text-center paddingAround wideSectionTitle">
        Frequently Asked Questions
      </h4>
      <div className="container-fluid paddingAround max800">
        <h5>How do visual problems effect my child's ability to read?</h5>
        <p>
          Poor visual skills, specifically lack of mastery over eye movement,
          can cause slow word by word reading. Visual problems make it difficult
          to recognize words in a line of text, even when our brain understands
          the meaning of the word, and even if we just saw the word a few lines
          before.
        </p>
        <p>
          In order to be a proficient reader, one must have the visual skills to
          aim their eyes accurately at the text, keep the words clear and in
          focus, form a single picture from both eyes, recognize and derive
          meaning from the words on the page, and have the ability to visualize
          a mental image to comprehend what is read.
        </p>
        <br />

        <h5>How do visual problems effect my child's ability to spell?</h5>
        <p>
          The ability to spell has more to do with visual skills than with
          effort and intelligence. When a child has poor visual skills, they
          depend on skills from other sensory systems, such as auditory or
          verbal. These sensory systems are not as efficient as the visual
          system and cause spelling to be more difficult and frustrating.
          Children who use their auditory or verbal system as their dominant
          sense to attempt to spell, spell a word based on how it sounds. (For
          example "bekuz" instead of "because"). Children with strong visual
          skills and sense of visual dominance can spell words with mental
          imagery and recognize words that are misspelled by the way they look.
        </p>
        <p>
          Visual recognition of words is a key skill that separates successful
          students from unsuccessful ones. Vision therapy enhances this skill,
          thus improving and positively impacting spelling, reading and
          handwriting abilities.
        </p>
        <br />

        <h5>How do visual problems effect my child's handwriting skills?</h5>
        <p>
          Poor handwriting is often attributed to laziness, poor fine-motor
          coordination, or a number of other culprits, while a functional vision
          problem could be the real cause.
        </p>
        <p>
          Our ability to write words is contingent on our ability to process an
          image and turn it into a word on the page. The visual picture needs to
          be converted to letters in our mind and then sent to our hand to write
          the word. This process will be challenging if we have inefficient or
          poorly functioning visual recognition skills. The inability to convert
          mental pictures into letters for the hand to write translates into
          poor penmanship.
        </p>
        <br />

        <h5>
          How do visual problems effect my child's ability to follow directions?
        </h5>
        <p>
          Children who are strong visual thinkers effortlessly turn what they
          hear into mental imagery. The mental pictures are much easier to
          remember than a series of sentences. Children with poor visual imagery
          will use other skills, such as repeating the instructions countless
          times in their head. These children may be so focused on trying to
          remember the spoken words, that they are unable to process the
          information efficiently enough to carry out the task. Subsequently,
          the child may be labeled as forgetful, disobedient, or even ADD/ADHD.
        </p>
        <p>
          Vision therapy helps a child use the power of visualization to convert
          spoken language into mental imagery. Mastering this skill will greatly
          improve the child's comprehension of spoken directions.
        </p>
      </div>
    </div>
  );
}

export default Lrvp;
