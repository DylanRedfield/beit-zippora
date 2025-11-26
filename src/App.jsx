import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Activity, 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  Wind,
  Bird
} from 'lucide-react';

// Color Palette derived from the Beit Zippora logo
const colors = {
  terracotta: '#c57d56', // The brownish-orange of the text/body
  sage: '#7d9c6c',       // The green of the leaves/birdhouse
  cream: '#fcfbf7',      // The background
  text: '#4a4a4a',       // Dark grey for readability
  white: '#ffffff'
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children, mobile }) => (
    <a 
      href={href}
      className={`
        font-medium transition-colors duration-300
        ${mobile 
          ? 'block px-4 py-3 hover:bg-orange-50 text-gray-800' 
          : 'text-gray-600 hover:text-[#c57d56]'}
      `}
      onClick={() => mobile && setIsMenuOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: colors.cream, color: colors.text }}>
      
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2 group">
             {/* Abstract Bird Icon mimicking the logo */}
            <div className="relative w-8 h-8 flex items-center justify-center bg-[#7d9c6c] rounded-full text-white transition-transform group-hover:scale-110">
              <Bird size={18} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-wide font-bold leading-none text-[#c57d56]">BEIT ZIPPORA</span>
              <span className="text-[0.6rem] tracking-[0.2em] text-[#7d9c6c] font-medium uppercase">Restore. Move. Nourish</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#approach">Approach</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a 
              href="#contact" 
              className="px-6 py-2 rounded-full text-white font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: colors.terracotta }}
            >
              Book Visit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden border-t border-gray-100">
            <div className="flex flex-col py-2">
              <NavLink href="#about" mobile>About</NavLink>
              <NavLink href="#services" mobile>Services</NavLink>
              <NavLink href="#approach" mobile>Approach</NavLink>
              <NavLink href="#contact" mobile>Contact</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - COMING SOON */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#7d9c6c" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.9,34.5C59.6,45.9,48.2,55,36.2,62.6C24.2,70.2,11.6,76.3,-2.3,80.3C-16.2,84.3,-31.4,86.2,-44.6,80.2C-57.8,74.2,-69,60.3,-77.3,45.2C-85.6,30.1,-91.1,13.8,-88.9,-1.3C-86.7,-16.4,-76.8,-30.3,-65.3,-41.5C-53.8,-52.7,-40.7,-61.2,-27.5,-69C-14.3,-76.8,-1,-83.9,13.6,-85.5C28.2,-87.1,43.7,-83.2,57,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center text-center animate-fade-in-up">
          
          {/* Logo Placeholder - Replace this div with <img src="/your-logo.png" /> in production */}
          <div className="mb-10 transform hover:scale-105 transition-transform duration-500">
            {/* We recreate the visual feel of the logo since we can't import local files in this preview */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex flex-col items-center justify-center bg-orange-50/30 rounded-full border border-[#c57d56]/20 p-8">
               <Bird size={80} strokeWidth={1} color={colors.sage} className="mb-2" />
               <h2 className="font-serif text-3xl font-bold tracking-wide" style={{ color: colors.terracotta }}>BEIT<br/>ZIPPORA</h2>
               <span className="text-xs font-medium tracking-[0.2em] mt-2" style={{ color: colors.sage }}>RESTORE. MOVE. NOURISH</span>
            </div>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl leading-tight text-gray-800 mb-4">
            Coming Soon
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-600 leading-relaxed max-w-2xl mb-8">
            <span className="font-semibold text-[#7d9c6c]">Beit Zippora</span> is preparing a new space for your journey to Restore, Move, and Nourish.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full text-white font-medium text-center transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              style={{ backgroundColor: colors.terracotta }}
            >
              Stay Updated
            </a>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section id="approach" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">Restore. Move. Nourish.</h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-10" style={{ backgroundColor: colors.sage }}></div>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            At Beit Zippora, we believe that healing is not linear. It requires a balance of 
            restoring function, mindful movement, and nourishing the connection between 
            mind and body. Our approach integrates clinical excellence with compassionate care.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Wind size={32} />, 
                title: "Restore", 
                desc: "Pelvic floor therapy and rehabilitation to rebuild your foundation." 
              },
              { 
                icon: <Activity size={32} />, 
                title: "Move", 
                desc: "Pilates and corrective exercises designed for the female body." 
              },
              { 
                icon: <Leaf size={32} />, 
                title: "Nourish", 
                desc: "Holistic guidance to support your recovery journey." 
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#fdfbf7] hover:bg-[#fcf8f2] transition-colors border border-transparent hover:border-orange-100 group">
                <div 
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                  style={{ backgroundColor: 'white', color: colors.terracotta, boxShadow: '0 4px 20px rgba(197, 125, 86, 0.1)' }}
                >
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative" style={{ backgroundColor: '#f4f1ea' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#c57d56] font-bold tracking-widest text-sm uppercase mb-2 block">Our Offerings</span>
              <h2 className="font-serif text-4xl text-gray-800">Clinical & Wellness Services</h2>
            </div>
            <a href="#contact" className="text-[#7d9c6c] font-medium hover:text-[#c57d56] flex items-center gap-2">
              View full price list <Activity size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Pelvic Floor Physiotherapy",
              "Prenatal & Postpartum Care",
              "Diastasis Recti Rehab",
              "Clinical Pilates",
              "Menopause Support",
              "Manual Therapy"
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="mt-1 p-1 bg-green-50 rounded-full">
                  <Leaf size={16} className="text-[#7d9c6c]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{service}</h3>
                  <p className="text-sm text-gray-500">Comprehensive assessment and personalized treatment plans tailored to your specific needs.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Founder Section */}
      <section id="about" className="py-24 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 relative">
                {/* Decorative squares */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-[#fcf8f2] rounded-3xl -z-10 translate-x-8 -translate-y-8"></div>
                <div className="relative aspect-square bg-[#7d9c6c] rounded-3xl overflow-hidden flex items-center justify-center">
                   {/* Placeholder for Founder Image */}
                   <span className="text-white/80 font-serif text-2xl text-center px-8">
                     [Insert Photo of Zippora or Clinic Space]
                   </span>
                </div>
             </div>
             <div className="order-1 md:order-2">
               <h2 className="font-serif text-4xl text-gray-800 mb-6">A space built for women.</h2>
               <p className="text-gray-600 mb-6 leading-relaxed">
                 Founded with the vision of creating a safe, nurturing environment for women's health in Israel, 
                 Beit Zippora combines evidence-based physiotherapy with a holistic view of the female body.
               </p>
               <p className="text-gray-600 mb-8 leading-relaxed">
                 Whether you are recovering from childbirth, managing chronic pain, or seeking to strengthen 
                 your body through safe movement, our door is open. Like the bird in our logo, we help you 
                 find your balance and build your nest of strength.
               </p>
               
               <div className="flex items-center gap-4 text-sm font-bold text-[#c57d56]">
                  <div className="h-px w-12 bg-[#c57d56]"></div>
                  <span>ZIPPORA, HEAD PHYSIOTHERAPIST</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 text-white relative" style={{ backgroundColor: colors.terracotta }}>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-5 text-gray-800">
            
            {/* Contact Info */}
            <div className="md:col-span-2 p-10 bg-[#3d3d3d] text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-serif text-2xl mb-2">Visit Us</h3>
                <p className="text-white/70 text-sm mb-12">We'd love to hear from you.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#c57d56] shrink-0" />
                    <div>
                      <p className="font-bold text-sm">Our Location</p>
                      <p className="text-white/70 text-sm">123 HaShalom Road,<br/>Tel Aviv, Israel</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-[#c57d56] shrink-0" />
                    <div>
                      <p className="font-bold text-sm">Phone</p>
                      <p className="text-white/70 text-sm">+972 50-123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-[#c57d56] shrink-0" />
                    <div>
                      <p className="font-bold text-sm">Email</p>
                      <p className="text-white/70 text-sm">hello@beitzippora.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#4a4a4a] rounded-full"></div>
            </div>

            {/* Form */}
            <div className="md:col-span-3 p-10 lg:p-14">
              <h3 className="font-serif text-3xl mb-8 text-[#c57d56]">Book an Appointment</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">First Name</label>
                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#c57d56] transition-colors bg-transparent" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Last Name</label>
                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#c57d56] transition-colors bg-transparent" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone</label>
                  <input type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#c57d56] transition-colors bg-transparent" placeholder="050-000-0000" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Service Interest</label>
                  <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#c57d56] transition-colors bg-transparent text-gray-700">
                    <option>General Consultation</option>
                    <option>Pelvic Floor Therapy</option>
                    <option>Pilates</option>
                    <option>Postpartum Check</option>
                  </select>
                </div>

                <button className="w-full py-4 rounded-lg text-white font-bold mt-4 hover:opacity-90 transition-opacity shadow-lg" style={{ backgroundColor: colors.sage }}>
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333] text-white/60 py-12 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <Bird size={20} className="text-[#7d9c6c]" />
             <span className="font-serif text-white text-lg">Beit Zippora</span>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
          <div className="text-xs">
            © {new Date().getFullYear()} Beit Zippora. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
