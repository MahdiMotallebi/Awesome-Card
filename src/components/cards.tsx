import Image from 'next/image';
import React from 'react';
``;
//styles
import styled from 'styled-components';

//icons
import { BsFillGridFill, BsArrowRight } from 'react-icons/bs';

const borderRadius = '1rem';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: space-between;
  background: #111;
  padding: 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}) {
    flex-direction: row;
    gap: 1.5rem;
  } ;
`;
const BigCard = styled.div`
  background: #03c2a9;
  padding: 0.3rem;
  height: 27rem;
  width: 100%;
  border-top-left-radius: ${borderRadius};
  border-bottom-left-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  position: relative;
  &::before {
    position: absolute;
    content: '';
    height: 100px;
    width: 50px;
    top: -20px;
    right: 0;
    background: #03c2a9;
    border-top-right-radius: ${borderRadius};
  }

  &::after {
    position: absolute;
    content: '';
    height: 50px;
    width: 150px;
    top: -20px;
    right: 5px;
    border-top-right-radius: 5rem;
    border-top-left-radius: 0.6rem;
    transform: skew(-30deg);
    background: #03c2a9;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}) {
    flex: 2;

    height: 30rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.values.xl}) {
    height: 35rem;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  transform: rotate(45deg);
  font-size: 1rem;
  width: 25px;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Img = styled.div`
  position: absolute;
  width: 12rem;
  height: 12rem;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) rotateY(180deg);
  z-index: 100;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}) {
    width: 23rem;
    height: 23rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.xl}) {
    width: 28rem;
    height: 28rem;
  } ;
`;

const Bottom = styled.div`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
  z-index: 101;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}) {
    top: 85%;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}) {
    top: 85%;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
  }
`;
const LeftText = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1rem;
  text-align: center;
  &::first-letter {
    text-transform: capitalize;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}) {
    text-align: left;
    width: 30%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.xl}) {
    font-size: 1rem;
    line-height: 1.3rem;
    width: 20%;
  } ;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: none;
  border: 1px solid #000;
  border-radius: 1.5rem;
  width: 100%;
  padding: 0.5rem 1rem;
  cursor: pointer;

  p {
    &::first-letter {
      text-transform: uppercase;
    }
    font-weight: 700;
    font-size: 0.9rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}) {
    width: auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.xl}) {
    gap: 1.5rem;
    width: 30%;
    padding: 0.8rem 1rem;
  }

  span {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 50%;
    font-size: 0.8rem;
  }
`;

const SmallCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #ffa500;
  padding: 1rem;
  width: 100%;
  height: 27rem;
  border-top-right-radius: ${borderRadius};
  border-bottom-left-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  position: relative;
  &::before {
    position: absolute;
    content: '';
    height: 100px;
    width: 50px;
    top: -20px;
    left: 0;
    background: #ffa500;
    border-top-left-radius: ${borderRadius};
  }

  &::after {
    position: absolute;
    content: '';
    height: 50px;
    width: 100px;
    top: -20px;
    left: 5px;
    border-top-left-radius: 5rem;
    border-top-right-radius: 0.6rem;
    transform: skew(30deg);
    background: #ffa500;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}) {
    flex: 1.3;
    height: 30rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}) {
    flex: 0.8;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.values.xl}) {
    height: 35rem;
  }
`;

const Title = styled.div`
  text-align: center;
  position: relative;
  z-index: 100;
  h6 {
    font-size: 2rem;
  }
  h2 {
    font-size: 3rem;
    text-transform: uppercase;
    @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}) {
      font-size: 3.5rem;
    }
  }
`;

const OrangeImg = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
`;
const Text = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.2rem;
  &::first-letter {
    text-transform: uppercase;
  }

  span {
    font-weight: 900;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}) {
    width: 50%;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}) {
    width: 65%;
  }
`;
const Cards = () => {
  return (
    <Wrapper>
      <BigCard>
        <Icon>
          <BsFillGridFill />
        </Icon>
        <Img>
          <Image src="/images/man.png" layout="fill" alt="man" />
        </Img>
        <Bottom>
          <LeftText>because your business needs a lot more</LeftText>
          <Button>
            <p>get expert advise</p>
            <span>
              <BsArrowRight />
            </span>
          </Button>
        </Bottom>
      </BigCard>
      <SmallCard>
        <Title>
          <h6>the</h6>
          <h2>future</h2>
        </Title>
        <OrangeImg>
          <Image src="/images/orange.png" alt="twitter" layout="fill" />
        </OrangeImg>

        <Text>
          free your mind for something <span>more imortant</span>
        </Text>
      </SmallCard>
    </Wrapper>
  );
};

export default Cards;
