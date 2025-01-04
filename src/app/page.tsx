import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <div id="hero">
        <Hero />
      </div>

      <div id="about">
        <SectionTitle
                preTitle="About Us"
                title="Our Mission"
              >
                Our mission at HAC is to provide safe and secure shelter for homeless individuals, 
                offer nutritious meals and essential supplies, facilitate access to healthcare and 
                social services, and empower individuals through education and job training programs.
              </SectionTitle>
        <Benefits data={benefitOne} />
        
      </div>
      
      <div id="team">
        <Benefits imgPos="right" data={benefitTwo} />
        <SectionTitle
          preTitle="Watch a video"
          title="Get to know us!"
        >
          Discover more about our mission and values through this video. 
          Learn how we strive to make a positive impact in our community. 
          Get to know the dedicated team behind our efforts and the stories 
          of those we have helped.
      </SectionTitle>
      <Video videoId="fZ0D0cnR88E" />
      </div>
    
      <div id="testimonials">
        <SectionTitle
          preTitle="Testimonials"
          title="Here's what our people have said"
        >
          Testimonaials are given by volunteers, donors, and those we have helped. 
          They are not given anything in exchange for their testimonials.
        </SectionTitle>

        <Testimonials />
      </div>
      
      <div id="faq">
        <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>
        <Faq />
      </div>


    </Container>
  );
}
