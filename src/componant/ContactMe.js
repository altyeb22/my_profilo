import React from 'react';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTelegram, IconBrandX } from '@tabler/icons-react';

const ContactMe = () => {
  return (
    <div className="contact-me mt-2  pt-6 pb-3 mb-12 h-auto" id="contact-me">
   
        
            <div className="flex items-center justify-center  gap-3">
              <a  className=' icon-connect w-9  h-9 flex items-center justify-center  rounded-full border-2 ' rel="noopener noreferrer" target="_blank" href="https://twitter.com/alt7yb22">
              <IconBrandX   />
                
                </a>
              <a  className=' icon-connect w-9  h-9 flex items-center justify-center  rounded-full border-2' rel="noopener noreferrer" target="_blank" href="https://github.com/HSN4">
              <IconBrandGithub   />
              </a>
              <a  className='icon-connect w-9  h-9 flex items-center justify-center  rounded-full border-2' rel="noopener noreferrer" target="_blank" 
              href="https://www.linkedin.com/in/hussein-mohamed-alhamed-b81060217/">
              <IconBrandLinkedin   />
               
               </a>
              <a  className='icon-connect w-9  h-9 flex items-center justify-center  rounded-full border-2' rel="noopener noreferrer" target="_blank" href="https://www.telegram.com">
              <IconBrandTelegram   />
                
                </a>
            </div>
          </div>

  

  );
};

export default ContactMe;
