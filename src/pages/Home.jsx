import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Home = () => {
  let navigate = useNavigate();

  //? to set the data we receive form API
  const [users, setUsers] = React.useState([]);

  //? Function to get the data from API
  const getDetails = async () => {
    try {
      const { data } = await axios.get(`https://randomuser.me/api/?results=25`);
      console.log(data.results);
      setTimeout(() => {
        setUsers([...users, ...data.results]);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  //? LOGOUT function
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  React.useEffect(() => {
    getDetails();
  }, []);

  //? If a user is not logged in, It will navigate to login screen
  if (!localStorage.user) {
    return (
      <>
        <p>You are not logged in</p>
        <button onClick={() => navigate("/")}>Login</button>
      </>
    );
  }

  return (
    <div className="home-screen">
      <div className="flex flex-row-reverse justify-between ">
        <button
          className="font-inter font-medium bg-[#f05136] text-white px-4 
          py-2 rounded-md w-28"
          onClick={logout}
        >
          Logout
        </button>
        <h2 className="font-extrabold text-[#242424] text-[32px]">
          Random User
        </h2>
      </div>

      <InfiniteScroll
        dataLength={users.length}
        next={getDetails}
        loader={
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <p>
              <Skeleton count={3} />
            </p>
          </SkeletonTheme>
        }
        hasMore={true}
      >
        <div className="ml-3 mt-4 grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 grid-cols-1 gap-3">
          {users.map((u, idx) => (
            <div
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-10"
              key={idx}
            >
              <div className="flex flex-col items-center pb-10">
                <img
                  src={u.picture.medium || <Skeleton count={3} />}
                  alt={u.name.first}
                  className="w-24 h-24 mb-3 rounded-full shadow-lg mt-3"
                />
                <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {u.name.title}
                  {u.name.first}
                  {u.name.last}
                </h3>
                <p className="mb-1 text-lg font-medium text-gray-900 dark:text-white first-letter:uppercase">
                  {u.gender} ({u.dob.age})
                </p>
                <p>{(u.location.state, u.location.country)}</p>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
