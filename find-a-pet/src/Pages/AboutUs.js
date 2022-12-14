import React from 'react'

const AboutUs = () => {
  return (
    // <div>
    //   <header id="aU-container">
    //     <h1 id="about-h1">About Us</h1>
    //     <p id="aU-text">
    //       Do you have a lost pet? Or simply want to be a contributing member of
    //       society who also happens to love reuiniting lost fur babies to their
    //       owners? Well the objective of this app is to show lost pets while
    //       giving a description of that pet and allowing you to add your own
    //       comments to tell the user if you know its whereabouts or have seen the
    //       pet recently.
    //     </p>
    //   </header>
    // </div>
    <div id="about">
      <div class="about pitbull">
        <img src="./images/white_pitbull.png" alt="pitbull img" />
        <h2>Post</h2>
        <p className="about p1">
          Post a new listing in the Lost Ones tab if unfortunately your pet is
          lost. It is my hope that someone will have seen that pet in around the
          area your pet was last seen and hopefully the comments will lead to
          finding your lost pet.
        </p>
      </div>
      <div class="about cat">
        <img src="./images/laying_cat.png" alt="sad-cat" />
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
        <img src="./images/dog_view.png" alt="dog-view" />
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
