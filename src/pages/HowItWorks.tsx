import { ChevronDoubleRightIcon, ChartBarIcon, MailIcon, UploadIcon } from '@heroicons/react/outline';
import Doc from '../resources/images/doctors-check.png';
import Doc2 from '../resources/images/assessment-image.png';

const transferFeatures = [
  {
    id: 1,
    name: 'Start an Assesment',
    description:
      'Login to your organization admin account and start and assessment. Follow the simple steps to begin the assesment.',
    icon: ChevronDoubleRightIcon,
  },
  {
    id: 2,
    name: 'Submit Employee List',
    description:
      'Upload a CSV file of the employees to be surveyed. We will take that list and sort it over a 3 month timeline to survey each employee with our proprietary Strata survey ',
    icon: UploadIcon,
  },
  {
    id: 3,
    name: 'Review the Results',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChartBarIcon,
  },
]

const communicationFeatures = [


  {
    id: 1,
    name: 'Upload New List Each Month',
    description:
      'Through monthly group assessments, information is provided to group leadership that indicates the level of group well-being, specifically measures of stress and anxiety (which are strong predictors of work performance and satisfaction).',
    icon: UploadIcon,
  },
  {
    id: 2,
    name: 'Reminder emails and Notifications',
    description:
      'To keep the process working for you you continue to notify and update those surveyed',
    icon: MailIcon,
  },
]



export default function HowItWorks() {
  return (
    <div>
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>

        <div className="relative">
        <h2 className="text-base text-center font-semibold text-indigo-600 tracking-wide uppercase">How It Works</h2>
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Group Well-Being Assessment
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          Start using our powerful tool that provides managers with insights into the emotional well-being of employees as a group.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Simple Three Step Process
            </h3>
            <p className="mt-3 text-lg text-gray-500">
            A sample of group members anonymously answer a brief series of questions. Strata Intel is then able to extrapolate the emotional well-being of the group as a whole with a high degree of statistical confidence by utilizing a unique data set collected over a 20 year period composed of tens of thousands of data points.
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-semibold text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            <img
              className="relative mx-auto"
              width={490}
              src={Doc}
              alt=""
            />
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Survey Continues Each Quarter</h3>
              <p className="mt-3 text-lg text-gray-500">
              Trend analysis over time provides valuable metrics of how events and actions taken are impacting the emotional well-being of the group, with additional analysis of influence on turnover and occurrence rates of adverse events.
              </p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-semibold text-gray-900">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              <img
                className="relative mx-auto"
                width={550}
                src={Doc2}
                alt=""
              />
            </div>
            
          </div>
        </div>
      </div>      
    </div>
    </div>
    
  )
}