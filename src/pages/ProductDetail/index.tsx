import React, { useState } from "react";
import { Rate } from "antd";

import info from "../../assets/info.png";
import avatar from "../../assets/avatar.png";
import {
  Main,
  Section,
  Container,
  Info,
  Desc,
  Ingredient,
  Quantity,
  TabList,
  DescDetail,
  Review,
  ReviewShow,
  ReviewComment,
  FormReview,
  Author,
  ButtonSubmit,
} from "./styles";

const ProductDetail = () => {
  const [isShowDesc, setIsShowDesc] = useState<boolean>(true);
  const [isShowReviews, setIsShowReviews] = useState<boolean>(false);

  const handleShowDesc = () => {
    setIsShowDesc(true);
    setIsShowReviews(false);
  };

  const handleShowReviews = () => {
    setIsShowDesc(false);
    setIsShowReviews(true);
  };

  return (
    <Main>
      <Section>
        <Container>
          <Info>
            <div className="info-img">
              <img src={info} alt="" />
              {/* <span>Sale!</span> */}
            </div>
            <Desc>
              <h1>Chezz burger</h1>
              <div className="price">
                <span>$200.00</span>
                <span>$100.00</span>
              </div>
              <h3>Ingredients</h3>
              <Ingredient>
                <li>Eggs</li>
                <li>Meat</li>
                <li>Vegestable</li>
                <li>garlic</li>
              </Ingredient>
              <Quantity>
                <input type="number" min="1" />
                <button>Add to cart</button>
              </Quantity>
              <p className="product-meta">Category: Single-product-category</p>
            </Desc>
          </Info>
          <div className="tabs">
            <TabList className="tabs-list">
              <li onClick={() => handleShowDesc()}>Description</li>
              <li onClick={() => handleShowReviews()}>Review(0)</li>
            </TabList>
            {isShowDesc && (
              <DescDetail>
                <h2>Description</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                  non ducimus tempore nihil a?
                </p>
              </DescDetail>
            )}

            {isShowReviews && (
              <Review>
                <h2>Review</h2>
                <ReviewShow>
                  <div className="avatar">
                    <img src={avatar} alt="" />
                  </div>
                  <ReviewComment>
                    <div className="comment">
                      <h4>abc</h4>
                      <p>delecious</p>
                    </div>
                    <Rate className="rate" disabled defaultValue={2} />
                  </ReviewComment>
                </ReviewShow>
                <FormReview>
                  <form action="">
                    <span className="reply-title">Add a review</span>
                    <span className="reply-note">
                      Your email address will not be published. Required fields
                      are marked *
                    </span>
                    <Author>
                      <div>
                        <label htmlFor="name" className="title-review">
                          Name*
                        </label>
                        <input type="text" name="" id="name" />
                      </div>

                      <div>
                        <label htmlFor="email" className="title-review">
                          Email*
                        </label>
                        <input type="text" name="" id="email" />
                      </div>
                    </Author>
                    <div>
                      <input type="checkbox" name="" id="" />
                      <span className="title-review">
                        Save My Name, Email, And Website In This Browser For The
                        Next Time I Comment.
                      </span>
                    </div>
                    <h5 className="title-review">Your Rating*</h5>
                    <Rate />
                    <h5 className="title-review">Your Review*</h5>
                    <textarea name="" id="" cols={140} rows={10}></textarea>
                    <ButtonSubmit>
                      <button>Submit</button>
                    </ButtonSubmit>
                  </form>
                </FormReview>
              </Review>
            )}
          </div>
        </Container>
      </Section>
    </Main>
  );
};

export default ProductDetail;
