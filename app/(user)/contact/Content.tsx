import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ContactCardProps {
  icon: string;
  title: string;
  subtitle: string;
  mainInfo: string;
  link:string;
  bgColor?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  icon, 
  title, 
  subtitle, 
  mainInfo, 
  link,
  bgColor = 'bg-white' 
}) => {
  return (
    <Link href={link} className={`${bgColor} rounded-xl p-6 border border-green-light hover:scale-[1.02] hover:shadow-lg duration-200 text-center`}>
      <div className="flex justify-center mb-4 mt-3">
        <div className="w-20 h-20 flex items-center justify-center">
          <Image alt={icon}  src={`/svg/${icon}`} width={20} height={20} className="w-20 h-20 text-green-200"/>
        </div>
      </div>
      <h3 className="text-gray-900 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{subtitle}</p>
      <p className="text-gray-900 font-medium">{mainInfo}</p>
    </Link>
  );
};

const ContactInfoSection: React.FC = () => {
  return (
    <div className="bg-green-light/50 py-20 px-4">
      <div className="w-[85%] max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
          Let us know how we can help
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactCard
          link='tel:+919107644644'
            icon="call.svg"
            title="Call Us On"
            subtitle="Mon-Fri from 8am to 5pm"
            mainInfo="+919107644644"
          />
          
          <ContactCard
          link='tel:+918129939881'
            icon="call.svg"
            title="Call Us On"
            subtitle="Mon-Fri from 8am to 5pm"
            mainInfo="+918129939881"
          />
          
          <ContactCard
            link='mailto:info@faceschool.in'
            icon="mail.svg"
            title="Email Us"
            subtitle="Speak to our support team."
            mainInfo="info@faceschool.in"
          />
          
          <ContactCard
          link='https://maps.app.goo.gl/21gG639KsT7Ur2LZ8'
            icon="location.svg"
            title="Our Location"
            subtitle=""
            mainInfo="Kodiyathur (PO), Mukkam, Kozhikode
Kerala India 673602
"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;