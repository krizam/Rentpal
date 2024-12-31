const people = [
  { name: 'Krisam Byanju', location: 'Bhaktapur, Nepal', email: 'krisambyanju@gmail.com', role: 'Member' },
  { name: 'Alex Johnson', location: 'London, UK', email: 'alex.johnson@example.com', role: 'Admin' },
  { name: 'Morgan Lee', location: 'Sydney, Australia', email: 'morgan.lee@example.com', role: 'Member' },
  { name: 'Jamie Smith', location: 'Toronto, Canada', email: 'jamie.smith@example.com', role: 'Owner' },
  { name: 'Chris Evans', location: 'San Francisco, USA', email: 'chris.evans@example.com', role: 'Admin' },
  { name: 'Taylor Brown', location: 'Berlin, Germany', email: 'taylor.brown@example.com', role: 'Member' },
  { name: 'Jordan Garcia', location: 'Madrid, Spain', email: 'jordan.garcia@example.com', role: 'Member' },
  { name: 'Peyton Adams', location: 'Paris, France', email: 'peyton.adams@example.com', role: 'Owner' },
  { name: 'Riley Davis', location: 'Tokyo, Japan', email: 'riley.davis@example.com', role: 'Admin' },
  { name: 'Casey Taylor', location: 'Amsterdam, Netherlands', email: 'casey.taylor@example.com', role: 'Member' },
  { name: 'Dakota Wilson', location: 'Dublin, Ireland', email: 'dakota.wilson@example.com', role: 'Member' },
  { name: 'Quinn Martinez', location: 'Mexico City, Mexico', email: 'quinn.martinez@example.com', role: 'Admin' },
  { name: 'Cameron Bell', location: 'Rome, Italy', email: 'cameron.bell@example.com', role: 'Member' },
  { name: 'Skylar Green', location: 'Cape Town, South Africa', email: 'skylar.green@example.com', role: 'Owner' },
  { name: 'Drew Carter', location: 'Singapore', email: 'drew.carter@example.com', role: 'Admin' },
  { name: 'Jordan Reed', location: 'Dubai, UAE', email: 'jordan.reed@example.com', role: 'Member' },
  { name: 'Blake Parker', location: 'Beijing, China', email: 'blake.parker@example.com', role: 'Admin' },
  { name: 'Taylor Kelly', location: 'Seoul, South Korea', email: 'taylor.kelly@example.com', role: 'Member' },
  { name: 'Avery Mitchell', location: 'Moscow, Russia', email: 'avery.mitchell@example.com', role: 'Member' },
  { name: 'Harper Brooks', location: 'Mumbai, India', email: 'harper.brooks@example.com', role: 'Admin' },
  { name: 'Emerson Murphy', location: 'Bangkok, Thailand', email: 'emerson.murphy@example.com', role: 'Member' },
  { name: 'Charlie Sanders', location: 'Rio de Janeiro, Brazil', email: 'charlie.sanders@example.com', role: 'Member' },
  { name: 'Reese Morgan', location: 'Kuala Lumpur, Malaysia', email: 'reese.morgan@example.com', role: 'Admin' },
  { name: 'Finley Carter', location: 'Oslo, Norway', email: 'finley.carter@example.com', role: 'Owner' },
  { name: 'Sawyer Hughes', location: 'Zurich, Switzerland', email: 'sawyer.hughes@example.com', role: 'Member' },
  { name: 'Rowan Cook', location: 'Vienna, Austria', email: 'rowan.cook@example.com', role: 'Admin' },
  { name: 'River Foster', location: 'Stockholm, Sweden', email: 'river.foster@example.com', role: 'Member' },
  { name: 'Logan Cooper', location: 'Helsinki, Finland', email: 'logan.cooper@example.com', role: 'Admin' },
  { name: 'Dakota Edwards', location: 'Copenhagen, Denmark', email: 'dakota.edwards@example.com', role: 'Owner' },
  { name: 'Parker Sanders', location: 'Lisbon, Portugal', email: 'parker.sanders@example.com', role: 'Member' },
];

export default function Example() {
  return (
    <div className="bg-gray-900 mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold text-white">Bookings</h1>
                <p className="mt-2 text-sm text-gray-300">
                  A list of all the room bookings in your account including their details.
                </p>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button
                  type="button"
                  className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Add user
                </button>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white sm:pl-0">
                          Name
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Location
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Email
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Role
                        </th>
                        <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-0">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {people.map((person) => (
                        <tr key={person.email}>
                          <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-white sm:pl-0">
                            {person.name}
                          </td>
                          <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-300">{person.title}</td>
                          <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-300">{person.email}</td>
                          <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-300">{person.role}</td>
                          <td className="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                            <a href="#" className="text-indigo-400 hover:text-indigo-300">
                              Edit<span className="sr-only">, {person.name}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
