import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { MapPin, Users, Award, CheckCircle, Zap, Target, Globe, Menu, Mountain, Snowflake, Flag, X } from 'lucide-react';
import { motion } from 'motion/react';
import heroImage from './assets/Poland_3JPG.jpg';
import truthChartingLogo from './assets/Truth_Charting_Logo.png';
import formedLogo from './assets/FORMED_LOGO.png';
import basilicasImage from './assets/Basilicas.jpg';
import antarcticaImage from './assets/Trinity_Church,_Antarctica_7577.jpeg';
import roadTripImage from './assets/us-road-trip.png';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Global Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5"></div>
        <div className="absolute inset-0 opacity-30 mix-blend-multiply" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-4">
        <div className="bg-black/20 backdrop-blur-xl border border-orange-500/20 rounded-full px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="#top" className="cursor-pointer">
                <img 
                  src={truthChartingLogo} 
                  alt="Truth Charting Logo" 
                  className="h-8 w-auto object-contain filter brightness-0 invert"
                />
              </a>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#partnership" className="text-white/70 hover:text-white transition-colors text-sm">Partnership</a>
              <a href="#videos" className="text-white/70 hover:text-white transition-colors text-sm">Videos</a>
              <a href="#seasons" className="text-white/70 hover:text-white transition-colors text-sm">Seasons</a>
              <a href="#pricing" className="text-white/70 hover:text-white transition-colors text-sm">Pricing</a>
              <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700">
                <a href="#contact" className="text-white no-underline">Contact</a>
              </Button>
            </div>
            <Button size="sm" variant="ghost" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Church interior" 
            className="w-full h-full object-cover object-center"
          />
          
          {/* Creative Gradient Overlays */}
          {/* Left side orange glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 via-orange-600/40 to-transparent"></div>
          
          {/* Bottom black fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          
          {/* Right side atmospheric fade */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/25 via-transparent to-transparent"></div>
          
          {/* Central spotlight effect */}
          <div className="absolute inset-0" style={{
            background: `radial-gradient(ellipse 60% 50% at 50% 50%, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.7) 100%)`
          }}></div>
          
          {/* Orange accent light from left */}
          <div className="absolute inset-0" style={{
            background: `radial-gradient(ellipse 40% 80% at 20% 60%, rgba(234, 88, 12, 0.3) 0%, transparent 50%)`
          }}></div>
          
          {/* Film Grain Texture */}
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.25'/%3E%3C/svg%3E")`,
            backgroundSize: '128px 128px'
          }}></div>
          
          {/* Additional depth overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-900/20 to-black/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Badge className="mb-8 bg-black/40 text-white border-orange-500/40 backdrop-blur-xl px-6 py-2 shadow-2xl">
                <Zap className="w-4 h-4 mr-2" />
                Revolutionary Catholic Formation
              </Badge>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
                              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
                  <span className="block mb-4">ADVENTURE</span>
                  <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 bg-clip-text text-transparent block mb-4 drop-shadow-lg">
                    MEETS
                  </span>
                  <span className="block">FORMATION</span>
                </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
            >
              The first subscription-based Catholic youth curriculum that combines Grand Tour-style adventure with deep theological formation.
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-black/20">
            <motion.div
              className="w-1 h-3 bg-orange-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/5 to-black"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Logo Partnership Display */}
            <div className="relative flex items-center justify-center mb-12" style={{ height: '120px' }}>
              {/* Centered X - the anchor point */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
                style={{ marginLeft: '-35px' }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl">
                  <X className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={3} />
                </div>
              </motion.div>

              {/* Truth Charting Logo - positioned relative to X */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute left-1/2 top-1/2 transform -translate-y-1/2"
                style={{ marginLeft: '-270px' }}
              >
                <img 
                  src={truthChartingLogo} 
                  alt="Truth Charting Logo" 
                  className="h-12 md:h-12 object-contain filter brightness-0 invert"
                  style={{ transform: 'scale(1.7)'}}  
                />
              </motion.div>

              {/* FORMED Logo - positioned relative to X */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute left-1/2 top-1/2 transform -translate-y-1/2"
                style={{ marginLeft: '90px', marginTop: '-15px' }}
              >
                <img 
                  src={formedLogo} 
                  alt="FORMED Logo" 
                  className="h-16 md:h-20 object-contain filter brightness-0 invert"
                />
              </motion.div>
            </div>

            {/* Partnership Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              The Perfect <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Partnership</span>
            </motion.h2>

            {/* Partnership Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 md:p-12">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                  Truth Charting's <span className="text-orange-400 font-semibold">engaging, high-stakes adventure format</span> perfectly complements FORMED's proven <span className="text-orange-400 font-semibold">distribution infrastructure and parish relationships</span>.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-orange-300">Truth Charting Brings:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                        <span className="text-white/80">Youth-focused content creation expertise with proven engagement of over 3M unique viewers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                        <span className="text-white/80">Adventure-based storytelling that captivates the digital generation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                        <span className="text-white/80">High-production value content that rivals secular entertainment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                        <span className="text-white/80">Continuous content pipeline solving the "what's next?" challenge</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-orange-300">FORMED Provides:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                        <span className="text-white/80">Established relationships with 5,000+ Catholic parishes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                        <span className="text-white/80">Proven streaming infrastructure serving 1.6M+ people</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                        <span className="text-white/80">Institutional credibility and Augustine Institute backing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                        <span className="text-white/80">Integrated platform combining youth and adult formation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/30">
                  <p className="text-lg text-center text-white/90 italic">
                    "Together, we create the <span className="font-semibold text-orange-300">only platform</span> that delivers Netflix-quality adventure content with theological integrity directly to Catholic parishes nationwide."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section id="videos" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Inspiration</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              See the formats and styles that inspired the Truth Charting Youth Series approach
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                title: "Grand Tour Adventure Format",
                description: "High-production adventure storytelling that keeps audiences engaged",
                videoId: "OjfZr1na8yA",
                category: "Storytelling Inspiration"
              },
              {
                title: "Alpha Youth Series Structure",
                description: "Proven Youth Group formation framework that works with teenagers",
                videoId: "x5N7H2T5Rmw",
                category: "Format Model"
              },
              {
                title: "Truth Charting Style",
                description: "Our existing content approach that resonates with 100K+ followers",
                videoId: "hqSlA8-D9JU",
                category: "Our Approach"
              }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-orange-500/20 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:border-orange-500/40">
                  <div className="aspect-video relative overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1&showinfo=0`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-8">
                    <Badge className="mb-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border-orange-500/30">
                      {video.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-300 transition-colors">{video.title}</h3>
                    <p className="text-white/70 text-lg">{video.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">The Perfect Fusion</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Truth Charting Youth Series combines the <span className="text-orange-400 font-semibold">adventure-driven storytelling</span> of Grand Tour, 
                the <span className="text-orange-400 font-semibold">structured formation approach</span> of Alpha Youth Series, and our proven 
                <span className="text-orange-400 font-semibold"> Truth Charting methodology</span> to create something entirely new for Catholic youth ministry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Crisis Statistics */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40z'/%3E%3Cpath d='m0 40l40-40h-40z' transform='matrix(-1 0 0 1 40 0)'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              The <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Crisis</span> is Real
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Catholic youth are leaving the Church at unprecedented rates. We're here to change that.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "79%", text: "of cradle Catholics leave by age 23", color: "from-red-500 to-orange-500" },
              { number: "26%", text: "attend Mass weekly or more", color: "from-orange-500 to-yellow-500" },
              { number: "3.1M", text: "Catholic teens in the US", color: "from-orange-500 to-red-500" },
              { number: "7.4", text: "hours daily on digital platforms", color: "from-red-500 to-pink-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-orange-500/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5"></div>
                  <div className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent relative z-10`}>
                    {stat.number}
                  </div>
                  <p className="text-white/70 relative z-10">{stat.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-sm text-white/50 max-w-3xl mx-auto">
              *Data sources: <a href="https://www.catholic.com/audio/cot/new-survey-shows-why-catholics-leave-the-church" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">PEW Research Center</a>, <a href="https://www.usccb.org/beliefs-and-teachings/vocations/survey-of-youth-and-young-adults-on-vocations-part-1#:~:text=Frequency%20of%20Mass%20Attendance%20during,of%20other%20races%20and%20ethnicities." target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">USCCB Survey of Youth and Young Adults on Vocations (2012)</a>, and <a href="https://explodingtopics.com/blog/screen-time-for-teens" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">Exploding Topics Teen Screen Time Study</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Epic Formation Journeys */}
      <section id="seasons" className="py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-red-900/20 to-orange-900/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Epic Formation <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Journeys</span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Season-long adventure frameworks for Catholic youth formation. Each semester follows one epic journey that serves as the unifying thread connecting weekly theological topics.
            </p>
          </motion.div>

          {/* Season Cards */}
          <div className="space-y-32">
            {/* The Basilica Quest */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-8">The Basilica Quest</h3>
                <p className="text-xl text-white/80 mb-8">Visiting all 85+ Catholic basilicas across North America</p>
                
                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: "Formation Arc", desc: "Foundations of Catholic Faith & Church History" },
                    { icon: Users, title: "Formation Guests", desc: "Bishops, church historians, and theologians at each basilica" },
                    { icon: Award, title: "18 Weekly Sessions", desc: "Road trips, historical exploration, architectural discovery" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                        <p className="text-white/70">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-white/5 rounded-xl border border-orange-500/20">
                  <p className="text-white/80 italic">
                    "Learning about saints, Church history, and sacred architecture while experiencing the adventure of cross-country travel."
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden">
                  <ImageWithFallback
                    src={basilicasImage}
                    alt="Catholic basilica"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-black/40 text-white border-orange-500/30 backdrop-blur-xl">
                      Season 1
                    </Badge>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Antarctic Pilgrimage */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:order-2"
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-8">Antarctic Pilgrimage</h3>
                <p className="text-xl text-white/80 mb-8">Epic expedition to reach the Ice Chapel in Antarctica</p>
                
                <div className="space-y-6">
                  {[
                    { icon: Snowflake, title: "Formation Arc", desc: "Faith in Extreme Circumstances & Perseverance" },
                    { icon: Mountain, title: "Formation Guests", desc: "Military chaplains, missionaries in harsh climates, adventure chaplains" },
                    { icon: Globe, title: "18 Weekly Sessions", desc: "Survival challenges, extreme weather preparation, international travel" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                        <p className="text-white/70">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-white/5 rounded-xl border border-blue-500/20">
                  <p className="text-white/80 italic">
                    "Learning about faith under pressure, trusting God in difficult circumstances, and the universality of the Church."
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:order-1 relative"
              >
                <div className="relative rounded-3xl overflow-hidden">
                  <ImageWithFallback
                    src={antarcticaImage}
                    alt="Antarctic adventure"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-black/40 text-white border-blue-500/30 backdrop-blur-xl">
                      Season 2
                    </Badge>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Catholicism Coast to Coast */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-8">Catholicism Coast to Coast</h3>
                <p className="text-xl text-white/80 mb-8">Discovering Catholic faith communities in all 50 states</p>
                
                <div className="space-y-6">
                  {[
                    { icon: Flag, title: "Formation Arc", desc: "Unity in Diversity & Universal Church" },
                    { icon: Users, title: "Formation Guests", desc: "Diverse Catholic leaders from different cultural backgrounds" },
                    { icon: Target, title: "18 Weekly Sessions", desc: "Cultural exploration, regional traditions, local parish visits" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                        <p className="text-white/70">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-white/5 rounded-xl border border-green-500/20">
                  <p className="text-white/80 italic">
                    "Exploring Alaskan native Catholic traditions to Louisiana Cajun Catholic culture to California mission heritage."
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden">
                  <ImageWithFallback
                    src={roadTripImage}
                    alt="American Catholic communities"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-black/40 text-white border-green-500/30 backdrop-blur-xl">
                      Season 3
                    </Badge>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Framework Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Framework Benefits</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {[
                  { title: "Sustained Engagement", desc: "Season-long challenges create anticipation and investment that keeps youth returning week after week." },
                  { title: "Educational Integration", desc: "Each location naturally introduces historical, geographical, and cultural learning opportunities." },
                  { title: "Relatable Format", desc: "Challenge-based content mirrors popular YouTube and social media formats youth already consume." },
                  { title: "Authentic Encounters", desc: "Real locations provide authentic backdrops for meaningful conversations with Church leaders." },
                  { title: "Memorable Formation", desc: "Adventure combined with learning creates lasting memories that help theological concepts stick." },
                  { title: "Production Scalability", desc: "Framework adapts for different production scales from full location shoots to virtual adventures." }
                ].map((benefit, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold mb-2 text-orange-300">{benefit.title}</h4>
                    <p className="text-white/70 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Episode Structure */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Structured for <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Success</span>
            </h2>
            <p className="text-xl text-white/70">45-50 minute episodes designed for optimal engagement</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Adventure + Icebreaker", time: "12 minutes", desc: "Engaging opening that draws youth into the journey", color: "from-red-400 to-orange-400" },
              { title: "Formation Content", time: "15 minutes", desc: "Deep theological teaching with expert interviews", color: "from-orange-400 to-yellow-400" },
              { title: "Adventure Continuation", time: "8 minutes", desc: "Practical application through ongoing adventure", color: "from-orange-400 to-red-400" },
              { title: "Discussion Breaks", time: "15 minutes total", desc: "Built-in small group discussion opportunities", color: "from-red-400 to-pink-400" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full hover:border-orange-500/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5"></div>
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg relative z-10`}>
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 relative z-10">{item.title}</h3>
                  <div className={`text-lg font-semibold mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent relative z-10`}>
                    {item.time}
                  </div>
                  <p className="text-white/70 text-sm relative z-10">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-black to-orange-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-white/70">Choose the plan that transforms your ministry</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Individual Parish",
                price: "$99",
                desc: "Perfect for single parish youth ministries",
                features: ["Full season access", "Leader guides included", "4K streaming quality", "Discussion resources"],
                popular: false
              },
              {
                name: "Diocesan License",
                price: "Custom",
                desc: "Unlimited parish access within diocese",
                features: ["Unlimited parishes", "All parish features", "Diocesan admin dashboard", "Priority support"],
                popular: true
              },
              {
                name: "FORMED Integration",
                price: "Custom",
                desc: "Revenue sharing partnership model",
                features: ["Existing FORMED access", "Integrated platform", "Single subscription", "Enhanced features"],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-orange-400 to-red-400 text-white border-none px-6 py-2 shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div className={`bg-white/5 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 h-full ${plan.popular ? 'scale-105 border-orange-400/40 shadow-2xl' : ''} hover:bg-white/10 transition-all duration-300 hover:border-orange-500/40 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5"></div>
                  <div className="text-center mb-8 relative z-10">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-white/70 mb-6">{plan.desc}</p>
                    <div className="text-4xl font-bold mb-1">
                      {plan.price}
                      {plan.price !== "Custom" && <span className="text-lg font-normal text-white/70">/month</span>}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8 relative z-10">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  

                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Investment & Revenue Partnership</h3>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                FORMED's strategic investment in Truth Charting's Youth Series creates a <span className="text-orange-400 font-semibold">bidirectional revenue sharing partnership</span>. When parishes subscribe to Truth Charting-only, FORMED receives revenue through our partnership agreement. When parishes access Truth Charting content through FORMED, Truth Charting receives revenue sharing as well. This mutual benefit model ensures both organizations thrive while strengthening Catholic formation across all subscription options.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Truth Charting */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Truth Charting?</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover what makes Truth Charting the revolutionary choice for Catholic youth formation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Proven Engagement",
                description: "Over 3M unique viewers and 100K+ followers demonstrate our ability to captivate the digital generation with authentic Catholic content.",
                color: "from-orange-500 to-red-600"
              },
              {
                icon: Award,
                title: "Award Winning Quality",
                description: "Quality production value that rivals secular youth entertainment while maintaining Catholic integrity and values.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Target,
                title: "Adventure-Driven Learning",
                description: "Our unique format combines high-stakes adventure with deep theological formation, making complex concepts accessible and memorable.",
                color: "from-red-500 to-orange-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full hover:border-orange-500/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5"></div>
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg relative z-10`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center relative z-10">{feature.title}</h3>
                  <p className="text-white/70 text-center leading-relaxed relative z-10">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">The Truth Charting Difference</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Unlike traditional youth ministry resources, Truth Charting combines <span className="text-orange-400 font-semibold">entertainment-grade production</span>, 
                <span className="text-orange-400 font-semibold"> adventure-driven storytelling</span>, and <span className="text-orange-400 font-semibold">theological depth </span> 
                 to create content that teenagers actually want to watch. Our proven track record of engaging millions of viewers 
                demonstrates that Catholic formation can be both entertaining and transformative.
              </p>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Quote Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <blockquote className="text-2xl md:text-3xl mb-8 italic text-white/90 leading-relaxed">
            "Dear young people, aspire to great things, to holiness, wherever you are. Do not settle for less. Then you will see the light of the Gospel grow every day, within you and around you."            </blockquote>
            <cite className="text-lg text-orange-300">— Pope Leo XIV</cite>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer id="contact" className="bg-black/50 backdrop-blur-xl border-t border-orange-500/20 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">John Donahue</h3>
              <div className="space-y-4 text-lg mb-8">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-orange-400">Email:</span>
                  <a href="mailto:john@truthcharting.com" className="text-white hover:text-orange-300 transition-colors">
                    john@truthcharting.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-orange-400">Cell:</span>
                  <a href="tel:+13522232895" className="text-white hover:text-orange-300 transition-colors">
                    352-223-2895
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">TC</span>
                </div>
                <span className="text-xl font-medium">Truth Charting LLC</span>
              </div>
              <p className="text-white/60 text-sm">&copy; 2025 Truth Charting Youth Series. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}