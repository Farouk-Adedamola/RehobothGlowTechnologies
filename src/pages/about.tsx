import { Link } from 'react-router-dom';
import { Container } from '../components/ui/container';
import { Section, SectionTitle } from '../components/ui/section';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Shield, Clock, Users, Target, Award, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '../components/utils/seo';
import { getCanonicalUrl } from '../lib/meta-utils';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function AboutPage() {
  // Core values data
  const coreValues = [
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in all aspects of our work, from engineering design to customer service.',
      icon: Award,
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical conduct in all our business dealings.',
      icon: Shield,
    },
    {
      title: 'Innovation',
      description: 'We continuously seek new and better solutions to water engineering challenges.',
      icon: Target,
    },
    {
      title: 'Sustainability',
      description: 'We are committed to environmentally responsible practices and water conservation.',
      icon: CheckCircle,
    },
    {
      title: 'Community',
      description: 'We recognize our role in supporting local communities through access to clean water.',
      icon: Users,
    },
    {
      title: 'Reliability',
      description: 'We deliver projects on time, within budget, and to specification, every time.',
      icon: Clock,
    },
  ];

  // Team members data
  const teamMembers = [
    {
      name: 'Engr. Samson Idoko',
      position: 'Founder & CEO',
      bio: 'With over 10 years in water engineering, Samson founded Rehoboth Glow Technology to address Nigeria\'s water challenges through innovative solutions.',
      imageSrc: '/assets/rb-engineer-ceo2.jpg',
    },
    {
      name: 'Engr. Abdul Samad',
      position: 'Engineer',
      bio: 'A Graduate of Physics from the University of Abuja, Fatima oversees all technical aspects of our projects, ensuring they meet international standards.',
      imageSrc: '/assets/rb-engineer.jpg',
    },
    {
      name: 'Eng. Ibrahim Ibrahim',
      position: 'Engineer',
      bio: 'Ibrahim is a graduate of Physics from the University of Abuja, with over 10 years of experience in water engineering.',
      imageSrc: '/assets/rb-enginerr.jpg',
    },
    {
      name: 'Mrs. Chioma Adeleke',
      position: 'Business Development Manager',
      bio: 'Chioma leads our client relationship management and business growth strategies across Nigeria.',
      imageSrc: 'https://via.placeholder.com/400x400?text=Business+Development',
    },
  ];


  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about Rehobothglow Technology - Nigeria's premier water engineering company with over 10 years of excellence in delivering innovative water solutions."
        keywords="about Rehobothglow, water engineering company, Nigeria, company history, water solutions, team, mission, vision"
        ogUrl={getCanonicalUrl('about')}
      />

      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/80" />
          <img 
            src="/assets/rb-facility-3.webp" 
            alt="About Rehoboth Glow Technology"
            className="w-full h-full object-cover"
          />
        </div>
        
        <Container className="relative z-10 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                variants={fadeIn}
              >
                <span className="text-sm font-medium">Our Journey of Excellence</span>
              </motion.div>
              <motion.h1 
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6"
                variants={fadeIn}
              >
                About <span className="text-primary-200">Rehoboth Glow</span> Technology
              </motion.h1>
              <motion.p 
                className="text-xl opacity-90 max-w-2xl mb-8"
                variants={fadeIn}
              >
                Delivering innovative water engineering solutions across Nigeria since 2012,
                with a commitment to excellence, sustainability, and community impact.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeIn}
              >
                <Button size="lg" className="rounded-full px-8" asChild>
                  <Link to="/contact">Work With Us</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-white/10 text-white border-white hover:bg-white/20" asChild>
                  <Link to="#team">Meet Our Team</Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary-400/20 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-primary-300/20 rounded-full filter blur-3xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-2xl">
                  <img 
                    src="/assets/rb-facility-3.webp" 
                    alt="About Rehoboth Glow"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-5 -right-5 bg-primary-500 text-white p-4 rounded-xl shadow-lg">
                    <div className="text-2xl font-bold">12+</div>
                    <div className="text-sm">Years of Impact</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
      </section>
      
      {/* Mission and Vision */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-600">Our Mission</h3>
                  <p className="text-gray-600">
                    To provide innovative, sustainable, and reliable water engineering solutions 
                    that improve access to clean water and enhance quality of life across Nigeria.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-600">Our Vision</h3>
                  <p className="text-gray-600">
                    To be Nigeria's leading water engineering company, recognized for excellence, 
                    innovation, and commitment to solving the country's water challenges.
                  </p>
                </div>
                <div className="pt-4">
                  <Button asChild className=" flex gap-2 border border-primary-600 rounded-sm">
                    <Link to="/contact">Work With Us</Link>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/assets/rb-series-2.webp" 
                alt="Rehoboth Glow mission"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </Section>
      

      
      {/* Core Values */}
      <Section>
        <Container>
          <SectionTitle 
            title="Our Core Values"
            subtitle="The principles that guide our work and relationships"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {coreValues.map((value, index) => (
              <Card key={index} className="border-none shadow hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Team Section */}
      <Section id="team" className="bg-gray-50">
        <Container>
          <SectionTitle 
            title="Meet Our Team"
            subtitle="The experts behind Rehoboth Glow Technology's innovative water solutions"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.imageSrc} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <div className="text-sm text-primary-600">{member.position}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{member.bio}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      
      
      
      {/* Office Location */}
      <Section className="bg-gray-50">
        <Container>
          <SectionTitle 
            title="Our Office"
            subtitle="Visit us at our headquarters in Abuja, Nigeria"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-full min-h-[400px]">
                {/* Placeholder for Google Maps - would be replaced with actual embed */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-gray-400" />
                  <span className="ml-2 text-gray-500">
                    Google Maps Embed would be here
                  </span>
                </div>
              </div>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Headquarters</h4>
                    <p className="text-gray-600">Abuja, Nigeria</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full flex gap-2 border border-primary-600 rounded-sm" asChild>
                    <Link to="/contact">Contact Us</Link>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
      
      {/* Call to Action */}
      <Section className="bg-primary-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Partner with Rehoboth Glow Technology
            </h2>
            <p className="text-xl mb-8">
              Join hundreds of satisfied clients who trust us with their water engineering needs.
              Let's work together to create sustainable water solutions for your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/projects">Explore Our Projects</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
} 