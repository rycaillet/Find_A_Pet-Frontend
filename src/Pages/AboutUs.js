import React from 'react'

const AboutUs = () => {
  return (
    <div id="about">
      <div class="about pitbull">
        <img
          src="https://images.pexels.com/photos/1124002/pexels-photo-1124002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="pitbull img"
        />
        <h2>Post</h2>
        <p className="about p1">
          Post a new listing in the Lost Ones tab if unfortunately your pet is
          lost. It is my hope that someone will have seen that pet in around the
          area your pet was last seen and hopefully the comments will lead to
          finding your lost pet.
        </p>
      </div>
      <div class="about cat">
        <img
          src="https://images.pexels.com/photos/14639094/pexels-photo-14639094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="sad-cat"
        />
        <h2>Other Options</h2>
        <p className="about p2">
          Some other options you might want to try if your pet is missing is to
          post on all of your social media platforms to spread awareness. You
          can also alert a rescue squad that is primarily volunteers who are
          dedicated to finding lost pets. Lastly you can print flyers and post
          them around your neighborhood.
        </p>
      </div>
      <div class="about view">
        <img
          src="https://images.pexels.com/photos/1975989/pexels-photo-1975989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="dog-view"
        />
        <h2>Mission</h2>
        <p className="about p3">
          My hope is that this app will help people find their loved ones and no
          pet has to suffer alone and afraid. Some might say that pets are
          simply just that...pets... but they are much more! Pets are part of
          the family itself and are not easily replaceable. I want these family
          members to enjoy being part of the family for as long as possible.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
