import React from 'react';


import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p></p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}



export const HomePage = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here using email and password
    // For example, upon successful login:
    // Assuming successful login for demonstration purposes
    // You should replace this with your actual login logic
    setLoggedIn(true);
  };

  if (!loggedIn) {
    return (
      <div>
        <h1>Welcome to My Electronics Store</h1>
        {/* Render the LoginPage component for login */}
        <div>
          <h2>Login</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            {/* Your login form fields */}
            {/* For simplicity, assuming a basic login with email and password */}
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }

  // If user is logged in, redirect to the main homepage
  router.push('/main-homepage'); // Replace '/main-homepage' with your actual homepage route

  // Placeholder content, this part will not be reached if redirection occurs
  return (
    <div>
      <h1>Main Homepage</h1>
      {/* Your main homepage content */}
    </div>
  );
};

export default Home ;
