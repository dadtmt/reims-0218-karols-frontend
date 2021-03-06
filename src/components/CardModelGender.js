import React from "react"
import { Card, CardTitle, CardBody, CardFooter } from "reactstrap"
import Counter from "./Counter"

const CardModelGender = ({
  id,
  title,
  description,
  image,
  selected,
  select,
  showCounter,
  count,
  handleMinus,
  handlePlus
}) => {
  return (
    <div>
      <Card
        style={{
          cursor: "pointer"
        }}
        onClick={() => {
          select(id)
        }}
      >
        <div
          style={{
            minHeight: "300px",
            position: "relative",
            overflow: "hidden",
            boxShadow:
              "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2)",
            background: selected
              ? `linear-gradient(
  rgba(255, 255, 255, 0.1), 
 rgba(255, 255, 255, 0.1)
 ), url(${image}) center/100% no-repeat`
              : `linear-gradient(
 rgba(0, 0, 0, 0.5), 
 rgba(0, 0, 0, 0.5)
 ), url(${image}) center/100% no-repeat`
          }}
        >
          <div
            className="data"
            style={{
              position: "absolute",
              bottom: "0",
              width: "100%",
              WebkitTransform: "translateY(calc(-10px + 1em))",
              transform: "translateY(calc(-10px + 1em))",
              transition: "-webkit-transform 0.3s"
            }}
          >
            <CardBody className="content">
              <CardTitle
                className="title"
                style={{
                  fontWeight: "500",
                  marginTop: "10px"
                }}
              >
                <p
                  style={{
                    color: "#FFF"
                  }}
                >
                  {title}
                </p>
              </CardTitle>
            </CardBody>
            <CardFooter>
              {showCounter && (
                <Counter
                  count={count}
                  handleMinus={handleMinus}
                  handlePlus={handlePlus}
                  id={id}
                />
              )}
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default CardModelGender
