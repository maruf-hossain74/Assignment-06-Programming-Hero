import React from 'react';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for getting started',
    price: '$0',
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month'
    ],
    cta: 'Get Started Free',
    bgColor: 'bg-white',
    textColor: 'text-gray-900',
    btnBg: 'bg-indigo-600',
    btnText: 'text-white'
  },
  {
    name: 'Pro',
    description: 'Best for professionals',
    price: '$29',
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics'
    ],
    cta: 'Start Pro Trial',
    bgColor: 'bg-indigo-600',
    textColor: 'text-white',
    btnBg: 'bg-white',
    btnText: 'text-indigo-600',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For teams and businesses',
    price: '$99',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding'
    ],
    cta: 'Contact Sales',
    bgColor: 'bg-white',
    textColor: 'text-gray-900',
    btnBg: 'bg-indigo-600',
    btnText: 'text-white'
  }
];

export default function Pricing() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Simple, Transparent Pricing
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pricingPlans.map((plan, planIdx) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 ${plan.bgColor} ${plan.popular ? 'lg:z-10 lg:rounded-b-none' : ''}`}
            >
              <div>
                {plan.popular && (
                  <div className="relative">
                    <div className="absolute -top-11 left-1/2 -translate-x-1/2 transform">
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800 ring-1 ring-inset ring-yellow-200">
                        Most Popular
                      </span>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className={`text-xl font-semibold leading-8 ${plan.textColor}`}>
                    {plan.name}
                  </h3>
                </div>
                <p className={`mt-4 text-base leading-7 ${plan.popular ? 'text-gray-100' : 'text-gray-600'}`}>{plan.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className={`text-5xl font-bold tracking-tight ${plan.textColor}`}>{plan.price}</span>
                  <span className={`text-sm font-semibold leading-6 ${plan.popular ? 'text-gray-100' : 'text-gray-600'}`}>/Month</span>
                </p>
                <ul role="list" className={`mt-8 space-y-3 text-sm leading-6 ${plan.popular ? 'text-gray-100' : 'text-gray-600'}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.126a.75.75 0 01.049 1.06l-9.514 10.126a.75.75 0 01-1.09.027l-4.704-5.23a.75.75 0 111.112-1.012l4.167 4.631 9.023-9.601a.75.75 0 011.06-.049z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href=""
                className={`mt-8 block rounded-full px-4 py-2 text-center text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${plan.btnBg} ${plan.btnText}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}