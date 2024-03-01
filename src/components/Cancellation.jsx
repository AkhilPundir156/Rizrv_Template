import React, { useEffect } from 'react';

const Cancellation = () => {
  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }, []);
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose lg:prose-lg">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">Refund & Cancellation policy</h1>
          <p className="mt-4 text-gray-500">
          At LEGALDEV, we're proud of the services we provide and promise that you'll be happy with the support and services you receive from us. We are always working to enhance and provide the greatest online secretarial, financial, and accounting services.          </p>
          <h2 className="mt-8 text-2xl font-bold leading-tight text-gray-900">Not Happy with Services? Tell us!</h2>
          <p className="mt-4 text-gray-500">
          In the event that you're not happy with Our Service, just visit our Site and mail to us and make a ticket for the commitment to start the discount cycle. All help tickets are inspected by individuals from the Senior Management and answered inside 24-48 hours.          </p>
          <h2 className="mt-8 text-2xl font-bold leading-tight text-gray-900">Our Refund Policy</h2>
          <p className="mt-4 text-gray-500">
          When a fee is paid to LEGALDEV, LEGALDEV retains the fees paid in advance in a client/customer account. As soon as LEGALDEV begins working on a client's case, they will be paid. Depending on the accomplishment of certain milestones (such as granting client portal access, assigning a relationship manager, acquiring a DIN, filing papers, etc.), LEGALDEV receives payment during an engagement at varied rates and intervals. Due to the non-returnable nature of the resources and working hours used to provide the service, refunds for earned fees cannot be given. Additionally, any money paid to governmental bodies, such as filing fees or taxes, or to other third parties involved in the execution of your transaction, cannot be refunded or credited. In any case, LEGALDEV will be held responsible.          </p>
          <h2 className="mt-8 text-2xl font-bold leading-tight text-gray-900">Process for Request Refund</h2>
          <p className="mt-4 text-gray-500">
          Refund requests can only be made by mail or by calling the support helpline. Please make your request for a refund to the appropriate engagement manager in the relevant chat channel. Refund requests must be submitted 60 days from the date of purchase. Refund requests that are made more than 60 days after the service began or changed will not be honored; only credit will be given. When we receive all the information needed to process your refund request—such as the justification for the return, the bank information needed to process the request, etc.—we will finish in 4 to 5 weeks.          </p>
          <h2 className="mt-8 text-2xl font-bold leading-tight text-gray-900">Change & Modification in Service</h2>
          <p className="mt-4 text-gray-500">
          You have 60 days from the date of purchase to request a change in the service you booked in exchange for a different one. Your LEGALDEV account will be credited with the original service's purchase price less any earned fees, money paid to governments (such as filing fees or taxes), or other third parties involved in completing your transaction. The balance credit may be applied to any other LEGALDEV service.          </p>
          <h2 className="mt-8 text-2xl font-bold leading-tight text-gray-900">Pricing</h2>
          <p className="mt-4 text-gray-500">
          In accordance with LEGALDEV's usual price policy, no additional service cost is ever requested. The regular price policy, however, does not apply to an increase in the total amount paid by the client to LEGALDEV due to a rise in government fees or to fees spent by the client for completing legal paperwork or for resubmitting forms to the government as a result of rejection or resubmission. Any additional expenses spent by the customer in connection with the performance of the service are not the responsibility or liability of LEGALDEV.               </p>
          <h2 className="mt-8 text-2xl font-bold leading-tight text-gray-900">Service Cancellation Charges</h2>
          <p className="mt-4 text-gray-500">
          Our warranty only applies to satisfaction concerns caused by LEGALDEV and excludes changes to your situation or mental condition because we are incurring expenditures and devoting time, labour, technological resources, and effort to your service or document creation. If you ask us to put off processing a service, we'll store the money you've already paid for it in your account until you're ready to start it.

We have the right to attempt to complete the service before processing any refunds. If you are dissatisfied with the service, there will be a cancellation fee of 20% plus any earned fees and any government fees. The cancellation fee would not be charged in the event of a service change.             </p>
        </div>
      </div>
    </div>
  );
};

export default Cancellation;
