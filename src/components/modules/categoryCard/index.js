import { Button, Grid } from "@mui/material";
// import cardtwo from "../../../assets/category/cardtwo.jpg";
import "./style.css";
export const CategoryCard = ({ backgroundImage }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    // backgroundSize: "cover", // Adjust as needed
    // backgroundRepeat: "no-repeat",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    borderRadius: "10px",
    // Other background properties like position, attachment, etc. can be added as needed
  };
  return (
    <Grid rowGap={2} container>
      <Grid item xs={6}>
        <div>
          <div className="px-2">
            <Grid container>
              <Grid item xs={12}>
                <div style={{ width: "100%", height: "400px" }}>
                  <div className="bgimg one">
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <div className="h-100 d-flex flex-column justify-content-end align-items-start px-2">
                        <h1
                          className="Poppins-SemiBold"
                          style={{ fontSize: "36px" }}
                        >
                          Surgical Instruments
                        </h1>
                        <Button
                          style={{
                            backgroundColor: "white",
                            marginBottom: "20px",
                            padding: "5px 30px",
                            opacity: "0.7",
                            fontFamily: "Poppins-Medium",
                          }}
                        >
                          Explore Me
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
      <Grid xs={6}>
        <div>
          <div className="px-2">
            <Grid container>
              <Grid xs={12}>
                <div style={{ width: "100%", height: "400px" }}>
                  <div className="bgimg three">
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <div className="h-100 d-flex flex-column justify-content-end align-items-start px-2">
                        <h1
                          className="Poppins-SemiBold"
                          style={{ fontSize: "36px" }}
                        >
                          Horse Gear
                        </h1>
                        <Button
                          style={{
                            backgroundColor: "white",
                            marginBottom: "20px",
                            padding: "5px 30px",
                            opacity: "0.7",
                            fontFamily: "Poppins-Medium",
                          }}
                        >
                          Explore Me
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>

      <Grid xs={6}>
        <div>
          <div className="px-2">
            <Grid container>
              <Grid xs={12}>
                <div style={{ width: "100%", height: "400px" }}>
                  <div className="bgimg four">
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <div className="h-100 d-flex flex-column justify-content-end align-items-start px-2">
                        <h1
                          className="Poppins-SemiBold"
                          style={{ fontSize: "36px" }}
                        >
                          Veterinary Equipments
                        </h1>
                        <Button
                          style={{
                            backgroundColor: "white",
                            marginBottom: "20px",
                            padding: "5px 30px",
                            opacity: "0.7",
                            fontFamily: "Poppins-Medium",
                          }}
                        >
                          Explore Me
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
      <Grid xs={6}>
        <div>
          <div className="px-2">
            <Grid container>
              <Grid xs={12}>
                <div style={{ width: "100%", height: "400px" }}>
                  <div className="bgimg two">
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <div className="h-100 d-flex flex-column justify-content-end align-items-start px-2">
                        <h1
                          className="Poppins-SemiBold"
                          style={{ fontSize: "36px" }}
                        >
                          Veterinary Practice
                        </h1>
                        <Button
                          style={{
                            backgroundColor: "white",
                            marginBottom: "20px",
                            padding: "5px 30px",
                            opacity: "0.7",
                            fontFamily: "Poppins-Medium",
                          }}
                        >
                          Explore Me
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
      {/* 
      
      */}
    </Grid>
  );
};
