import styled from "styled-components";

export const Main = styled.main`
  box-sizing: border-box;
  background-color: #f2f2f2;
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Montserrat", sans-serif;
  }
`;

export const Section = styled.section`
  padding: 80px 0;
`;

export const Container = styled.div`
  background-color: #ffffff;
  margin: 0 90px;
  padding: 0 30px;
  @media (max-width: 480px) {
    margin: 0 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    img {
      width: 300px;
      height: 300px;
    }
  }
`;

export const Desc = styled.div`
  margin-top: 10px;
  h1 {
    text-transform: capitalize;
    font-size: 36px;
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    margin-bottom: 20px;
  }

  h3 {
    margin: 20px 0;
    font-size: 25px;
  }

  .price {
    font-family: "Nunito", sans-serif;
    font-weight: 600;

    span:first-child {
      display: inline-block;
      margin-right: 20px;
      text-decoration: line-through red;
      font-size: 15px;
    }
    span:last-child {
      display: inline-block;
      color: #c70909;
      font-size: 20px;
    }
  }

  .product-meta {
    font-family: "Nunito", sans-serif;
    font-size: 18px;
    font-weight: 300px;
  }
`;

export const Ingredient = styled.ul`
  height: 200px;
  li {
    list-style: inside;
    font-size: 17px;
    font-weight: 400;
    font-family:
      "Nunito",
      sans - serif;
    padding-bottom: 8px;
  }
`;

export const Quantity = styled.div`
  display: flex;
  input {
    border: 1px solid rgba(0, 0, 0, 0.125);
    height: 40px;
    width: 50px;
    text-align: center;
    outline: none;
  }

  button {
    display: inline-block;
    margin-left: 5px;
    border-radius: 0px;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    border: none;
    transition: 0.6s;
    text-transform: capitalize;
    background-color: #ffcc00;
    font-size: 15px;
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
  }

  button:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

export const TabList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #d3ced2;
  cursor: pointer;
  li {
    display: inline-block;
    font-family: "Nunito", sans-serif;
    padding: 8px 16px;
    background-color: #f3f5ff;
    font-weight: 700;
    margin-right: 5px;
    border-left: 1px solid #d3ced2;
    border-right: 1px solid #d3ced2;
    border-top: 1px solid #d3ced2;
  }
`;

export const DescDetail = styled.div`
  h2 {
    margin: 20px 0;
  }

  p {
    font-family: "Nunito", sans-serif;
    text-align: justify;
  }
`;

export const Review = styled.div`
  h2 {
    margin: 20px 0;
  }
`;

export const ReviewShow = styled.div`
  display: flex;
  .avatar {
    flex-basis: 5%;
    img {
      width: 35px;
      height: 35px;
      padding: 3px;
      height: auto;
      background: #ebe9eb;
      border: 1px solid #e4e1e3;
      margin: 0;
      box-shadow: none;
    }
  }
`;

export const ReviewComment = styled.div`
  border: 1px solid #e4e1e3;
  padding: 1em 1em 0;
  flex-basis: 95%;
  position: relative;

  h4 {
    font-style: italic;
    margin: 0;
    font-family: "Nunito", sans-serif;
  }

  p {
    font-family: "Nunito";
  }

  .rate {
    position: absolute;
    right: 10px;
    top: 20px;
  }
`;

export const FormReview = styled.div`
  .reply-title {
    display: block;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 22px;
    text-transform: capitalize;
    font-weight: 700;
    line-height: 1.5;
    font-family: "Montserrat", sans-serif;
    color: #231900;
  }

  .reply-note {
    color: #656565;
    font-family: "Nunito";
  }

  .title-review {
    margin-bottom: 13px;
    font-size: 16px;
    font-weight: 600;
    color: #000;
    line-height: 26px;
    text-transform: capitalize;
    font-family: "Nunito";
  }

  h5 {
    margin: 20px 0;
  }

  textarea {
    display: block;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 0.25rem;
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }

  @media (max-width: 480px) {
    textarea {
      width: 380px;
    }
  }
`;

export const Author = styled.div`
  display: flex;
  margin: 20px 0;

  div {
    flex-basis: 50%;
  }

  div:last-child {
    margin-left: 20px;
  }

  input {
    display: block;
    box-sizing: border-box;
    margin-top: 20px;
    width: 100%;
    padding: 5px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 0.25rem;
    outline: none;
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }

  @media (max-width: 480px) {
    flex-direction: column;

    div:last-child {
      margin-left: 0px;
    }
  }
`;

export const ButtonSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;

  button {
    margin-left: 5px;
    border-radius: 0px;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    border: none;
    transition: 0.6s;
    text-transform: capitalize;
    background-color: #ffcc00;
    font-size: 15px;
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
  }

  button:hover {
    background-color: #000000;
    color: #ffffff;
  }

  @media (max-width: 480px) {
    display: block;
    button {
      width: 100%;
      margin: 0px;
    }
  }
`;
