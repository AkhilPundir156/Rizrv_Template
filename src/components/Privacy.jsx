import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  }, []);
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose lg:prose-lg">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">Legal & Business Assistance Services Privacy Policy</h1>
          <p className="mt-4 text-gray-500">
            We at Legal Dev have the CA & Legal services privacy policy in place to respect your privacy regarding sensitive and confidential information we may collect when operating https://legaldev.in/. We have taken all steps to ensure we keep your private information safe. Data privacy applies to all information collected through our website and may not apply to information collected from other sources. Depending on your activities while browsing our website, you may agree to additional terms and conditions provided for a better experience.
          </p>
          <h2 className="mt-8 text-2xl font-bold leading-tight text-gray-900">Website Visitors</h2>
          <p className="mt-4 text-gray-500">
            At Legal Dev, we understand the importance of having a comprehensive and effective Website Privacy Policy. We offer a professional and reliable Website Privacy Policy Legal Documentation Service to ensure that your website complies with all the relevant laws and regulations related to data privacy and protection.
          </p>
          <h2 className="mt-8 text-2xl font-bold leading-tight text-gray-900">Collecting Personally-Identifying Information</h2>
          <p className="mt-4 text-gray-500">
            Some visitors need specific services from our Legal Dev team that requires our expect to collect sensitive or confidential information that can identify a person. Depending on the nature of the interaction, our experts may gather necessary information such as username, email ID, or other personal information.
          </p>
          <h2 className="mt-8 text-2xl font-bold leading-tight text-gray-900">Security</h2>
          <p className="mt-4 text-gray-500">
            We give utmost prominence to your personal information. However, please remember that electronic transfer or storage of information may not ensure 100% security. We try to implement reasonable security steps to protect your personal information. Unfortunately, we cannot promise 100% security of the information provided.
          </p>
          <h2 className="mt-8 text-2xl font-bold leading-tight text-gray-900">Data Retention</h2>
          <p className="mt-4 text-gray-500">
            We will retain your Personal Information only for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements. When we no longer need to retain your Personal Information, we will securely delete or destroy it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
