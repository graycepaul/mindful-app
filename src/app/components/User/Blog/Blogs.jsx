import style from "./Blog.module.css";
import { Footer } from "../../Home/Footer/Footer";
import Sarafina from "../../../../assets/images/sarafina.png";
import Laraba from "../../../../assets/images/labara.png";
import Tamuno from "../../../../assets/images/tamuno.png";
import CategoryImg1 from "../../../../assets/images/colorfulLeaf.png";
import CategoryImg2 from "../../../../assets/images/pregnantBelly.png";
import CategoryImg3 from "../../../../assets/images/hijabis.png";
import CategoryImg4 from "../../../../assets/images/maleFriends.png";
import CategoryImg5 from "../../../../assets/images/veggies.png";
import CategoryImg6 from "../../../../assets/images/plant.png";

import { UserNav } from "../UserNav";

export const Blog = () => {
  return (
    <div className={style.blog}>
      <UserNav />
      <div className={style.blogHero}>
        <div>
          <h1>BLOG</h1>
          <h2>Welcome to Our Blog: Your Guide to Overcoming Addiction</h2>
        </div>
        <input
          type="search"
          name="search"
          placeholder="Search here for health tips, stories and so much more"
        />
      </div>
      <div className={style.blogPage}>
        <div className={style.blogSnippet}>
          <div className={style.snippetContent}>
            <h2>Finding Freedom: My Journey of Overcoming Addiction</h2>
            <div className={`${style.flexContainer} ${style.blogDate}`}>
              <img src={Sarafina} alt="blog " />
              <p>22 November 2023, by Sarafina Musese</p>
            </div>
            <p className={style.snippetDesc}>
              In a world filled with challenges and obstacles, the journey of
              overcoming addiction is one of resilience, courage, and hope.
              Today, we have the privilege of sharing the inspiring story of
              Sarah, a courageous...
            </p>
            <button>Read More</button>
          </div>
        </div>

        <div className={`${style.flexContainer} ${style.blogCards}`}>
          <div className={style.blogCard1}>
            <div className={style.featuredBlog}>
              <h2>
                Laraba’s journey into the world of flour, spice and everything
                sweet
              </h2>
              <div className={`${style.flexContainer} ${style.blogDate}`}>
                <img src={Sarafina} alt="blog " />
                <p>22 November 2023, by Sarafina Musese</p>
              </div>
              <h4>
                Simplify cooking with these 101 tips i curated from years of
                studying, learning and working in the Kitchen. The breakdown of
                the tricks to use in cooking to ease yourself.
              </h4>
              <a href="">Read more</a>
            </div>
            <img src={Laraba} alt="blog " />
          </div>
          <div className={style.blogCard2}>
            <div className={style.getFeatured}>
              <div>+</div>
              <h3>Get featured on our blog,</h3>
              <h3>Share something inspiring</h3>
              <button>Learn more</button>
            </div>
            <div className={style.featuredBlog}>
              <img src={Tamuno} alt="blog " />
              <h3>Tamuno’s tale of thread and pins by the machine</h3>
              <div className={style.blogDate}>
                <img src={Sarafina} alt="blog " />
                <p>22 November 2023, by Sarafina Musese</p>
              </div>
              <h4>
                Simplify cooking with these 101 tips i curated from years of
                studying, learning and working in the Kitchen. The breakdown of
                the tricks to use in cooking to ease yourself.
              </h4>
              <a href="">Read more</a>
            </div>
          </div>
        </div>

        <div className={style.blogCategories}>
          <nav>
            <ul>
              <li>All Categories</li>
              <li>Nutrition</li>
              <li>Exercise</li>
              <li>Wellness</li>
              <li>Stress Management</li>
            </ul>
          </nav>
          <div className={`${style.flexContainer} ${style.allCategories}`}>
            <div className={style.lifestyleCategory}>
              <div>
                <img src={CategoryImg1} alt="blog" className={style.blogImg} />
                <h3>Lifestyle</h3>
                <h4>
                  Love made me to start growing rare and wild species of plants
                </h4>
                <div className={`${style.flexContainer} ${style.blogDate}`}>
                  <img src={Sarafina} alt="blog " />
                  <p>22 November 2023, by Sarafina Musese</p>
                </div>
              </div>
              <div>
                <img src={CategoryImg2} alt="blog " className={style.blogImg} />
                <h3>Lifestyle</h3>
                <h4>
                  Love made me to start growing rare and wild species of plants
                </h4>
                <div className={`${style.flexContainer} ${style.blogDate}`}>
                  <img src={Sarafina} alt="blog " />
                  <p>22 November 2023, by Sarafina Musese</p>
                </div>
              </div>
            </div>
            <div className={style.lifestyleCategory}>
              <div>
                <img src={CategoryImg3} alt="blog " className={style.blogImg} />
                <h3>Lifestyle</h3>
                <h4>
                  Love made me to start growing rare and wild species of plants
                </h4>
                <div className={`${style.flexContainer} ${style.blogDate}`}>
                  <img src={Sarafina} alt="blog " />
                  <p>22 November 2023, by Sarafina Musese</p>
                </div>
              </div>
              <div>
                <img src={CategoryImg4} alt="blog " className={style.blogImg} />
                <h3>Lifestyle</h3>
                <h4>
                  Love made me to start growing rare and wild species of plants
                </h4>
                <div className={style.blogDate}>
                  <img src={Sarafina} alt="blog " />
                  <p>22 November 2023, by Sarafina Musese</p>
                </div>
              </div>
            </div>
            <div className={style.lifestyleCategory}>
              <div>
                <img src={CategoryImg5} alt="blog " className={style.blogImg} />
                <h3>Lifestyle</h3>
                <h4>
                  Love made me to start growing rare and wild species of plants
                </h4>
                <div className={`${style.flexContainer} ${style.blogDate}`}>
                  <img src={Sarafina} alt="blog " />
                  <p>22 November 2023, by Sarafina Musese</p>
                </div>
              </div>
              <div>
                <img src={CategoryImg6} alt="blog " className={style.blogImg} />
                <h3>Lifestyle</h3>
                <h4>
                  Love made me to start growing rare and wild species of plants
                </h4>
                <div className={style.blogDate}>
                  <img src={Sarafina} alt="blog " />
                  <p>22 November 2023, by Sarafina Musese</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={style.loadMore}>Load More</button>

        <div className={`${style.flexContainer} ${style.newsLetter}`}>
          <div>
            <h2>
              Stay up to date with our <span>newsletters</span>
            </h2>
            <p className={style.newsLetterParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor. Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <div>
            <form>
              <label htmlFor="name">Full Name</label>
              <br />
              <input type="text" id="name" placeholder="e.g John Dowry" />
              <br />
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                id="email"
                placeholder="e.g John_Mustapha@example.com"
              />
            </form>
            <div className={`${style.flexContainer} ${style.subscribe}`}>
              <button>Subscribe</button>
              <p>
                Your data is in the safe hands. Check out our{" "}
                <a href="#/privacy">Privacy policy</a> for more info.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
