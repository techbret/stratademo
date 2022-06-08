import { ChevronRightIcon } from '@heroicons/react/solid'
import Icon from '../resources/images/front-page-icon.svg';
import { CheckIcon } from '@heroicons/react/outline'


const features = [
    {
      name: 'Invite team members',
      description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    { name: 'View Reports', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
    {
      name: 'Easy to Manage',
      description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    { name: 'Set Dates', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
    { name: 'Notifications', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
    { name: 'Dashboard Functionality', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
    { name: 'Reporting', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
    { name: 'Mobile friendly', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  ]


export default function Home() {
    return (
    <div>
        <div className="pt-10 bg-blue-800 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">A better way to</span>
                    <span className="block text-blue-400">to assess health</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Through a monthly assessment of a group, management can utilize trends analyzed through a set of specialized metrics that assess overall well-being of an organization.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="block w-full py-3 px-4 rounded-md shadow bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                          >
                            Request Consultation
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                        This email method is designed to be private, and we take your privacy with the upmost importance. By providing your email, you agree to
                        our{' '}
                        <a href="#" className="font-medium text-white">
                          terms of service
                        </a>
                        .
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={Icon}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-blue-900 uppercase tracking-wide">Everything you need for</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">Quarterly Assesments</p>
          <p className="mt-4 text-lg text-gray-500">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-semibold text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

    <div className="bg-blue-800">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Boost your overall well-being.</span>
          <span className="block">Start using Strata Intel today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
        Strata Intel has created an easy to use and comprehensive assessment and access to a full array of high impact workplace mental health data points. With the workplace involved in addressing mental health, we have an incredible opportunity for positive change.
        </p>
        <a
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-blue-900 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          Try an Assesment Now
        </a>
      </div>
    </div>
    <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Software utilizes a data set of over 20 years
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
          Employers can play a key role in positively impacting workplace mental health. The most common ways to improve workplace mental health include raising awareness and educating the workforce, creating a mentally healthy climate and culture and improving access to mental health services and supports. The best place to start any workplace mental health initiative is with an organizational assessment.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Online</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">100%</dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Supprt</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">24/7</dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Data Points</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">10k</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>


        </div>

        
    )
}