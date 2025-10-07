import Image from 'next/image';
import './about.css';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0810] via-[#120717] to-[#1b0b1e]">
      {/* Hero Section */}
      <section className="about-hero relative py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative mb-8">
            <div className="about-profile-container w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-[#ff4d94] to-[#ff8a00] shadow-2xl">
              <Image
                src="/images/upper1.webp"
                alt="REAL UPPER PIKIN"
                width={256}
                height={256}
                className="about-profile-image w-full h-full object-cover"
              />
            </div>
            <div className="about-name-badge absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#ff4d94] to-[#ff8a00] text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
              REAL UPPER PIKIN
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#ff4d94] to-[#ff8a00] bg-clip-text text-transparent">
            Mrs. Precious Ewaen Adibeli
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A talented entertainer, philanthropist, and advocate for social justice, embodying confidence and charisma.
          </p>
        </div>
      </section>

      {/* Biography Sections */}
      <section className="about-section py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="about-card card card-hover">
            <h2 className="about-title text-3xl font-bold mb-4 gradient-text">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Mrs. Precious Ewaen Adibeli, fondly known as Real Upper Pikin, was born in the 90's, in Nigeria. She is a talented entertainer, philanthropist, and advocate for social justice, embodying confidence and charisma.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Real Upper Pikin is the youngest of eight siblings, guided by her prayer warrior mother, whose prayers shaped her path.
            </p>
          </div>

          {/* Education */}
          <div className="about-card card card-hover">
            <h2 className="about-title text-3xl font-bold mb-4 gradient-text">Education</h2>
            <p className="text-gray-300 leading-relaxed">
              She earned a Bachelor Degree in Mass Communication from Delta State University and another degree from the University of Togo (Lomé), showcasing her love for knowledge.
            </p>
          </div>

          {/* Family and Marriage */}
          <div className="about-card card card-hover">
            <h2 className="about-title text-3xl font-bold mb-4 gradient-text">Family and Marriage</h2>
            <p className="text-gray-300 leading-relaxed">
              Real Upper Pikin is married to Mr. Rodney Adibeli. They have three biological children and three foster children, exemplifying love and generosity.
            </p>
          </div>

          {/* Career */}
          <div className="about-card card card-hover">
            <h2 className="about-title text-3xl font-bold mb-4 gradient-text">Career</h2>
            <p className="text-gray-300 leading-relaxed">
              As a South-South entertainer, Real Upper Pikin has captivated audiences with her wit and charm. She is a proud member of the Actors Guild of Nigeria (AGN) and the Kegite Club International.
            </p>
          </div>

          {/* Philanthropy and Humanitarian Work */}
          <div className="about-card card card-hover">
            <h2 className="about-title text-3xl font-bold mb-4 gradient-text">Philanthropy and Humanitarian Work</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Real Upper Pikin's commitment to her community is immense, supporting girl child education, the less privileged, and women in need.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="about-list-item">Encouraging girl child education with school materials and financial support.</li>
              <li className="about-list-item">Supporting the less privileged with essential items.</li>
              <li className="about-list-item">Covering hospital bills for post-natal care.</li>
              <li className="about-list-item">Building a house for a special needs woman and her children.</li>
            </ul>
          </div>

          {/* Impact and Legacy */}
          <div className="about-card card card-hover">
            <h2 className="about-title text-3xl font-bold mb-4 gradient-text">Impact and Legacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Real Upper Pikin inspires fans worldwide, offering educative content and moral lessons through her social media platforms.
            </p>
          </div>

          {/* Awards and Recognition */}
          <div className="about-card card card-hover">
            <h2 className="about-title text-3xl font-bold mb-4 gradient-text">Awards and Recognition</h2>
            <ul className="text-gray-300 space-y-2">
              <li className="about-list-item">International awards from the UK</li>
              <li className="about-list-item">Recognition for philanthropy</li>
              <li className="about-list-item">Honorary memberships from multiple organizations</li>
            </ul>
          </div>

          {/* Personal Values */}
          <div className="about-card card card-hover">
            <h2 className="about-title text-3xl font-bold mb-4 gradient-text">Personal Values</h2>
            <p className="text-gray-300 leading-relaxed">
              Real Upper Pikin stands against lies, oppression, and injustice, admired for her advocacy and support for the less privileged.
            </p>
          </div>

          {/* Conclusion */}
          <div className="about-card about-conclusion card card-hover">
            <h2 className="about-title text-3xl font-bold mb-4 gradient-text">Conclusion</h2>
            <p className="text-gray-300 leading-relaxed">
              Mrs. Precious Ewaen Adibeli is a role model, embodying excellence, compassion, and resilience, inspiring countless individuals with her legacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
