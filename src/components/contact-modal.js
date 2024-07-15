import { MainButton } from "@/components/main-button";
import { MainContainer } from "@/components/main-container";
export const ContactModal = () => {
  return (
    <MainContainer>
      <div className="sm:w-[40rem] m-auto my-24 pb-12">
        <div className="space-y-5">
          <h1 className="text-black text-4xl font-semibold">Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            itaque veniam voluptatibus iure fugiat rerum nihil magni cum
            voluptas, consectetur cumque dolorum, ducimus unde ratione
            repudiandae ab consequatur illum saepe.
          </p>
          <div className="grid grid-cols-2 gap-4 lg:gap-12">
            <div className="border p-4 rounded-lg space-y-2">
              <h2 className="text-black text-xl font-semibold">Address</h2>
              <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
            </div>
            <div className="border p-4 rounded-lg space-y-2">
              <h2 className="text-black text-xl font-semibold">Contact</h2>
              <p>
                313-332-8662
                <br />
                info@email.com
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-xl mt-12 py-8 pl-9 pr-9 lg:pr-32 space-y-6">
          <h3 className="text-black text-lg font-semibold">Leave a Message</h3>
          <div className="grid grid-cols-2 gap-8">
            <input
              className="px-4 py-2 border-2 border-gray-300 rounded-lg"
              placeholder="Your Name"
              type="text"
            />
            <input
              className="px-4 py-2 border-2 border-gray-300 rounded-lg"
              placeholder="Your Email"
              type="text"
            />
          </div>
          <input
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
            placeholder="Subject"
            type="text"
          />
          <textarea
            className="w-full h-48 px-4 py-2 border-2 border-gray-300 rounded-lg"
            placeholder="Write a message"
          />
          <button className="bg-indigo-600 text-sm px-5 py-3 text-white rounded-lg max-w-fit">
            Send Message
          </button>
        </div>
      </div>
    </MainContainer>
  );
};
