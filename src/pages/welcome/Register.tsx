import { Link } from "react-router-dom";

const Login = () => {
  const inputStyle =
    "w-full bg-white-200 text-gray-700 border-b-2 border-accent py-[20px] px-[10px] leading-tight focus:outline-none focus:bg-white focus:border-primary";

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="container my-auto mx-auto">
        <div
          className="flex flex-col lg:flex-row-reverse
          w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden"
        >
          <div
            className="
            bg-[url('https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
            w-full lg:w-1/2 flex flex-col justify-center p-12 bg-norepeat bg-cover bg-center 
            gap-12 relative
            "
          >
            <div className="absolute inset-0 bg-black opacity-50 "></div>
            <h1 className="text-white mb-3 z-10">
              <span className="text-9xl">Gossip.</span>
            </h1>
            <div className="z-10">
              <p className="text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, fugit ipsam nobis suscipit porro, temporibus veniam
                aspernatur quisquam consequatur quasi unde! Quas vero quibusdam
                debitis, distinctio excepturi culpa itaque rerum!
              </p>
            </div>
            <div className="flex flex-col gap-5 text-center justify-center items-center z-10">
              <p className="text-white">Already Registered?</p>
              <Link to="/login">
                <button className="btn btn-primary">Login Here</button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4 text-neutral">Sign-Up</h2>
            <p className="mb-4 text-gray-500">Create an account</p>

            <div className="flex justify-between gap-5">
              <div className="w-[50%]">
                <input
                  type="text"
                  placeholder="John"
                  name="firstname"
                  className={inputStyle}
                />
              </div>
              <div className="w-[50%]">
                <input
                  type="text"
                  placeholder="Doe"
                  name="lastname"
                  className={inputStyle}
                />
              </div>
            </div>

            <div className="mt-5">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className={inputStyle}
              />
            </div>

            <div className="mt-5">
              <input
                type="password"
                placeholder="Password"
                name="password"
                className={inputStyle}
              />
            </div>

            <div className="mt-8">
              <button type="submit" className="btn btn-accent w-full">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
