import React, { Component } from "react";
import imgGirl from "../../core/assets/img/Group8424.png";

import "./Content.css";

class Content extends Component {
  render() {
    return (
      <>
        <div className="box">

          <div className="wrapper-content">

            <div className="text">
              <div className="firstText">
                <h1 id="text1">BIENVENIDO</h1>
              </div>

              <div className="secondText">
                <h1 id="text2">ADMIN</h1>
              </div>
            </div>

            {/* <!-- Parte del boton --> */}
            <div className="content-button-contact">
              <a className="button" href="mailto: juand.cabanat@unac.edu.co" rel="noopener noreferrer">
                Contactanos
              </a>
            </div>
          </div>

          <div className="sectionImage">
            {/* <!-- Rectangulo 1 --> */}
            <svg id="rectangle1"></svg>
            <svg id="rectangle2"></svg>
            <img className="imgGirl" src={imgGirl} alt="" />
          </div>

        </div>
        <div className="wrapper-social-media">
          <a
            href="https://www.instagram.com/vitarricooficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="links-social instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="50px"
              height="50px"
            >
              <circle cx="13" cy="29" r="2" fill="#ee3e54" />
              <circle cx="77" cy="13" r="1" fill="#f1bc19" />
              <circle cx="50" cy="50" r="37" fill="#fce0a2" />
              <circle cx="83" cy="15" r="4" fill="#f1bc19" />
              <circle cx="87" cy="24" r="2" fill="#ee3e54" />
              <circle cx="81" cy="76" r="2" fill="#fbcd59" />
              <circle cx="15" cy="63" r="4" fill="#fbcd59" />
              <circle cx="25" cy="87" r="2" fill="#ee3e54" />
              <circle cx="18.5" cy="53.5" r="2.5" fill="#fff" />
              <circle cx="21" cy="67" r="1" fill="#f1bc19" />
              <circle cx="80" cy="34" r="1" fill="#fff" />
              <path
                fill="#3231c7"
                d="M72.3,33.7v32.6c0,3.31-2.69,6-6,6H33.7c-3.31,0-6-2.69-6-6V33.7c0-3.31,2.69-6,6-6h32.6 C69.61,27.7,72.3,30.39,72.3,33.7z"
              />
              <path
                fill="#7228ad"
                d="M72.3,48.04V66.3c0,3.31-2.69,6-6,6H33.7c-3.31,0-6-2.69-6-6V33.7c0-3.31,2.69-6,6-6h18.26 C60.6,32.29,67.71,39.4,72.3,48.04z"
              />
              <path
                fill="#b11e93"
                d="M70,71c0,0.01,0,0.01,0,0.02c-1.02,0.8-2.3,1.28-3.7,1.28H33.7c-3.31,0-6-2.69-6-6V33.7 c0-1.4,0.48-2.68,1.28-3.7c0.01,0,0.01,0,0.02,0C51.64,30,70,48.36,70,71z"
              />
              <path
                fill="#db1a58"
                d="M62,71c0,0.44-0.01,0.87-0.03,1.3H33.7c-3.31,0-6-2.69-6-6V38.03C28.13,38.01,28.56,38,29,38 C47.23,38,62,52.77,62,71z"
              />
              <path
                fill="#e4273e"
                d="M54,71c0,0.43-0.01,0.87-0.03,1.3H33.7c-3.31,0-6-2.69-6-6V46.03C28.13,46.01,28.57,46,29,46 C42.81,46,54,57.19,54,71z"
              />
              <path
                fill="#f47c22"
                d="M47,71c0,0.44-0.02,0.87-0.05,1.3H33.7c-3.31,0-6-2.69-6-6V53.05C28.13,53.02,28.56,53,29,53 C38.94,53,47,61.06,47,71z"
              />
              <path
                fill="#ef9922"
                d="M41,71c0,0.44-0.02,0.87-0.07,1.3H33.7c-3.31,0-6-2.69-6-6v-7.23C28.13,59.02,28.56,59,29,59 C35.63,59,41,64.37,41,71z"
              />
              <path
                fill="#472b29"
                d="M66.3,73H33.7c-3.694,0-6.7-3.006-6.7-6.7V33.7c0-3.694,3.006-6.7,6.7-6.7h32.6 c3.694,0,6.7,3.006,6.7,6.7v32.6C73,69.994,69.994,73,66.3,73z M33.7,28.4c-2.923,0-5.3,2.377-5.3,5.3v32.6 c0,2.922,2.377,5.3,5.3,5.3h32.6c2.923,0,5.3-2.377,5.3-5.3V33.7c0-2.922-2.377-5.3-5.3-5.3H33.7z"
              />
              <g>
                <path
                  fill="#fff"
                  d="M49.99,65.45c-3.982,0-5.464-0.011-6.978-0.08c-1.388-0.062-2.469-0.271-3.505-0.677 c-1.006-0.388-1.793-0.899-2.553-1.659c-0.753-0.754-1.265-1.542-1.658-2.553c-0.395-1.007-0.604-2.088-0.677-3.505 c-0.069-1.525-0.08-3.006-0.08-6.977c0-3.964,0.011-5.442,0.08-6.968c0.062-1.388,0.271-2.468,0.676-3.504 c0.394-1.021,0.905-1.808,1.659-2.553c0.754-0.753,1.541-1.265,2.554-1.659c1.035-0.405,2.116-0.613,3.504-0.677 c1.565-0.07,3.065-0.09,6.978-0.09c3.914,0,5.411,0.02,6.967,0.09c1.388,0.063,2.469,0.271,3.506,0.677 c1.021,0.394,1.807,0.905,2.552,1.659c0.747,0.738,1.262,1.524,1.669,2.553c0.397,1.046,0.604,2.128,0.667,3.504 c0.07,1.58,0.09,3.078,0.09,6.967c0,3.897-0.02,5.397-0.09,6.978c-0.063,1.377-0.269,2.458-0.667,3.505 c-0.407,1.018-0.923,1.806-1.669,2.552c-0.743,0.752-1.527,1.264-2.543,1.659c-1.049,0.405-2.133,0.614-3.515,0.676 C55.443,65.439,53.964,65.45,49.99,65.45z M48.68,37.45c-2.752,0-4.263,0.021-5.575,0.079c-1.342,0.062-2.082,0.287-2.577,0.476 c-0.617,0.242-1.059,0.53-1.525,0.998c-0.467,0.466-0.755,0.905-0.993,1.516c-0.191,0.498-0.417,1.24-0.479,2.585 c-0.068,1.506-0.079,2.895-0.079,6.887c0,4,0.011,5.39,0.079,6.895c0.062,1.336,0.287,2.076,0.477,2.572 c0.239,0.619,0.526,1.061,0.99,1.525c0.473,0.465,0.916,0.752,1.53,0.994c0.479,0.188,1.204,0.411,2.576,0.475 c1.56,0.07,3.04,0.089,6.888,0.089c3.856,0,5.338-0.019,6.895-0.089c1.405-0.065,2.147-0.303,2.583-0.477 c0.604-0.234,1.044-0.518,1.514-0.978c0.466-0.476,0.755-0.919,1.001-1.534c0.186-0.487,0.405-1.217,0.469-2.575 c0.069-1.573,0.089-3.055,0.089-6.897c0-3.835-0.02-5.315-0.089-6.886c-0.063-1.356-0.282-2.086-0.467-2.57 c-0.239-0.62-0.525-1.061-0.99-1.525c-0.498-0.49-0.903-0.75-1.548-0.997c-0.464-0.185-1.178-0.408-2.56-0.473 c-1.535-0.07-3.018-0.089-6.896-0.089H48.68z"
                />
                <path
                  fill="#472b29"
                  d="M49.99,34.8c3.909,0,5.405,0.019,6.956,0.09c1.359,0.061,2.415,0.265,3.428,0.66 c0.985,0.38,1.744,0.873,2.467,1.605c0.719,0.71,1.216,1.47,1.608,2.459c0.389,1.024,0.59,2.081,0.652,3.429 c0.07,1.576,0.089,3.072,0.089,6.957c0,3.893-0.019,5.39-0.089,6.966c-0.062,1.35-0.263,2.407-0.648,3.42 c-0.396,0.989-0.894,1.751-1.617,2.474c-0.716,0.725-1.473,1.219-2.453,1.6c-1.023,0.395-2.083,0.599-3.436,0.66 c-1.509,0.069-2.986,0.08-6.956,0.08c-3.978,0-5.458-0.011-6.967-0.08c-1.359-0.061-2.415-0.264-3.426-0.66 c-0.971-0.375-1.731-0.869-2.465-1.602c-0.728-0.729-1.222-1.489-1.603-2.468c-0.384-0.981-0.587-2.038-0.659-3.423 c-0.069-1.522-0.08-3.001-0.08-6.968c0-3.959,0.011-5.436,0.08-6.957c0.061-1.359,0.264-2.415,0.66-3.427 c0.38-0.985,0.873-1.745,1.603-2.465c0.727-0.727,1.488-1.221,2.467-1.602c1.009-0.394,2.065-0.598,3.424-0.66 C44.585,34.819,46.082,34.8,49.99,34.8 M49.99,62.79c3.861,0,5.345-0.019,6.907-0.089c1.443-0.067,2.211-0.314,2.658-0.493 c0.641-0.248,1.105-0.547,1.609-1.041c0.487-0.497,0.791-0.964,1.053-1.62c0.191-0.501,0.419-1.255,0.483-2.649 c0.07-1.576,0.089-3.061,0.089-6.908c0-3.839-0.019-5.322-0.089-6.898c-0.065-1.391-0.292-2.145-0.483-2.65 c-0.249-0.645-0.562-1.126-1.049-1.614c-0.518-0.509-0.96-0.794-1.625-1.048c-0.486-0.194-1.225-0.425-2.645-0.492 c-1.539-0.07-3.024-0.089-6.907-0.089H48.68c-2.756,0-4.27,0.021-5.588,0.079c-1.376,0.064-2.141,0.296-2.658,0.493 c-0.641,0.251-1.122,0.566-1.609,1.053c-0.487,0.486-0.801,0.965-1.051,1.605c-0.197,0.513-0.431,1.28-0.495,2.662 c-0.069,1.511-0.08,2.901-0.08,6.898c0,4.004,0.01,5.397,0.08,6.907c0.064,1.372,0.297,2.136,0.493,2.65 c0.252,0.654,0.556,1.121,1.05,1.615c0.491,0.482,0.973,0.795,1.613,1.046c0.496,0.194,1.247,0.426,2.656,0.492 C44.655,62.771,46.138,62.79,49.99,62.79 M49.99,34.3c-3.991,0-5.454,0.021-6.989,0.09c-1.417,0.064-2.522,0.279-3.583,0.693 c-1.047,0.408-1.86,0.937-2.639,1.714c-0.78,0.771-1.31,1.585-1.716,2.639c-0.416,1.062-0.63,2.168-0.693,3.584 c-0.069,1.537-0.08,3.019-0.08,6.979c0,3.969,0.011,5.452,0.08,6.99c0.075,1.444,0.289,2.549,0.693,3.583 c0.407,1.045,0.937,1.859,1.715,2.639c0.786,0.786,1.601,1.314,2.639,1.715c1.062,0.416,2.168,0.63,3.584,0.693 c1.537,0.07,3.02,0.081,6.989,0.081c3.96,0,5.441-0.01,6.979-0.081c1.41-0.063,2.519-0.277,3.594-0.693 c1.051-0.409,1.861-0.938,2.629-1.715c0.771-0.771,1.303-1.583,1.726-2.64c0.409-1.075,0.619-2.18,0.684-3.583 c0.068-1.536,0.09-3,0.09-6.989c0-3.979-0.021-5.443-0.09-6.979c-0.064-1.402-0.274-2.506-0.685-3.585 c-0.421-1.062-0.953-1.876-1.724-2.637c-0.771-0.78-1.584-1.309-2.639-1.716c-1.063-0.416-2.169-0.629-3.585-0.693 C55.443,34.321,53.982,34.3,49.99,34.3L49.99,34.3z M49.99,62.29c-3.842,0-5.32-0.019-6.876-0.089 c-1.336-0.062-2.036-0.278-2.496-0.458c-0.582-0.229-1-0.5-1.445-0.938c-0.441-0.441-0.705-0.846-0.934-1.438 c-0.182-0.476-0.399-1.195-0.46-2.494c-0.068-1.492-0.079-2.881-0.079-6.884c0-3.995,0.011-5.382,0.079-6.875 c0.061-1.308,0.278-2.026,0.462-2.506c0.225-0.574,0.497-0.99,0.938-1.43c0.44-0.441,0.856-0.713,1.438-0.941 c0.473-0.18,1.192-0.399,2.499-0.459C44.42,37.722,45.93,37.7,48.68,37.7h1.311c3.876,0,5.355,0.019,6.885,0.088 c1.346,0.063,2.033,0.277,2.482,0.457c0.612,0.234,0.99,0.478,1.46,0.94c0.436,0.436,0.708,0.854,0.934,1.438 c0.176,0.463,0.389,1.17,0.45,2.493c0.069,1.557,0.089,3.036,0.089,6.875c0,3.847-0.02,5.328-0.089,6.886 c-0.062,1.322-0.273,2.027-0.451,2.494c-0.234,0.586-0.501,0.996-0.943,1.448c-0.445,0.437-0.851,0.7-1.432,0.924 c-0.424,0.169-1.13,0.396-2.501,0.459C55.32,62.271,53.84,62.29,49.99,62.29L49.99,62.29z"
                />
              </g>
              <path
                fill="#fff"
                d="M58.5,43.25c-0.965,0-1.75-0.785-1.75-1.75s0.785-1.75,1.75-1.75h0.001 c0.467,0,0.906,0.182,1.236,0.512c0.331,0.331,0.513,0.77,0.513,1.237C60.25,42.465,59.465,43.25,58.5,43.25z"
              />
              <path
                fill="#472b29"
                d="M58.5,40c0.828,0,1.5,0.672,1.5,1.5c0,0.828-0.672,1.5-1.5,1.5S57,42.328,57,41.5 C57,40.672,57.672,40.001,58.5,40L58.5,40 M58.5,39.5L58.5,39.5c-1.103,0.001-2,0.898-2,2c0,1.103,0.897,2,2,2s2-0.897,2-2 S59.603,39.5,58.5,39.5L58.5,39.5z"
              />
              <path
                fill="#fff"
                d="M49.988,41.504c-4.695,0-8.501,3.806-8.501,8.501s3.806,8.499,8.501,8.499 c4.695,0,8.499-3.805,8.499-8.499S54.682,41.504,49.988,41.504L49.988,41.504z M49.988,44.505c3.037,0,5.5,2.462,5.5,5.5 c0,3.037-2.463,5.5-5.5,5.5c-3.038,0-5.5-2.463-5.5-5.5C44.488,46.967,46.95,44.505,49.988,44.505z"
              />
              <path
                fill="#472b29"
                d="M49.988,58.754c-4.825,0-8.751-3.925-8.751-8.75c0-4.825,3.926-8.75,8.751-8.75 c4.824,0,8.749,3.925,8.749,8.75C58.737,54.829,54.812,58.754,49.988,58.754z M49.988,41.754c-4.55,0-8.251,3.701-8.251,8.25 c0,4.549,3.701,8.25,8.251,8.25c4.549,0,8.249-3.701,8.249-8.25C58.237,45.455,54.537,41.754,49.988,41.754z M49.988,55.754 c-3.171,0-5.75-2.58-5.75-5.75s2.579-5.75,5.75-5.75s5.75,2.58,5.75,5.75S53.159,55.754,49.988,55.754z M49.988,44.754 c-2.895,0-5.25,2.355-5.25,5.25s2.355,5.25,5.25,5.25s5.25-2.355,5.25-5.25S52.883,44.754,49.988,44.754z"
              />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/vitarricooficial"
            target="_blank"
            rel="noopener noreferrer"
            className="links-social facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="50px"
              height="50px"
            >
              <path
                fill="#ee3e54"
                d="M13 27A2 2 0 1 0 13 31A2 2 0 1 0 13 27Z"
              />
              <path
                fill="#f1bc19"
                d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"
              />
              <path
                fill="#fce0a2"
                d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"
              />
              <path
                fill="#f1bc19"
                d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"
              />
              <path
                fill="#ee3e54"
                d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"
              />
              <path
                fill="#fbcd59"
                d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"
              />
              <path
                fill="#ee3e54"
                d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"
              />
              <path
                fill="#fff"
                d="M18.5 51A2.5 2.5 0 1 0 18.5 56A2.5 2.5 0 1 0 18.5 51Z"
              />
              <path
                fill="#f1bc19"
                d="M21 66A1 1 0 1 0 21 68A1 1 0 1 0 21 66Z"
              />
              <path fill="#fff" d="M80 33A1 1 0 1 0 80 35A1 1 0 1 0 80 33Z" />
              <g>
                <path
                  fill="#78a2d2"
                  d="M50 25.625A24.25 24.25 0 1 0 50 74.125A24.25 24.25 0 1 0 50 25.625Z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M68.164,59.445c-0.073,0-0.148-0.017-0.219-0.051c-0.248-0.121-0.351-0.42-0.23-0.668 c0.132-0.271,0.256-0.543,0.375-0.818c0.46-1.068,0.826-2.186,1.087-3.318c0.062-0.27,0.333-0.437,0.6-0.375 c0.269,0.063,0.437,0.331,0.375,0.6c-0.275,1.191-0.66,2.366-1.144,3.49c-0.125,0.289-0.256,0.575-0.395,0.859 C68.527,59.342,68.349,59.445,68.164,59.445z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M70.264,52.336c-0.015,0-0.03-0.001-0.045-0.002c-0.275-0.024-0.478-0.268-0.453-0.543 c0.039-0.429,0.063-0.857,0.074-1.286c0.067-2.666-0.39-5.273-1.358-7.752c-0.101-0.257,0.027-0.547,0.284-0.647 c0.259-0.104,0.547,0.025,0.648,0.284c1.017,2.602,1.497,5.341,1.426,8.14c-0.011,0.451-0.037,0.901-0.078,1.352 C70.738,52.141,70.52,52.336,70.264,52.336z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M35.107,36.532c-0.123,0-0.245-0.045-0.341-0.135c-0.202-0.188-0.212-0.505-0.024-0.706 c3.399-3.642,7.999-5.94,12.95-6.475c0.277-0.023,0.521,0.17,0.551,0.443c0.03,0.274-0.169,0.521-0.443,0.551 c-4.713,0.509-9.091,2.697-12.327,6.162C35.375,36.479,35.241,36.532,35.107,36.532z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M36.138,65.284c-0.123,0-0.245-0.045-0.341-0.135c-7.104-6.632-8.721-17.138-3.934-25.548 c0.137-0.242,0.442-0.325,0.682-0.188c0.24,0.137,0.324,0.442,0.187,0.682c-4.557,8.006-3.016,18.008,3.748,24.323 c0.202,0.188,0.212,0.505,0.024,0.706C36.405,65.23,36.271,65.284,36.138,65.284z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M58.889,68.769c-0.186,0-0.365-0.104-0.451-0.283c-0.12-0.248-0.016-0.547,0.233-0.667 c2.202-1.062,4.172-2.515,5.856-4.316c0.679-0.729,1.307-1.511,1.866-2.325c0.156-0.227,0.469-0.285,0.695-0.129 c0.228,0.156,0.286,0.467,0.129,0.695c-0.587,0.855-1.246,1.677-1.959,2.44c-1.769,1.894-3.838,3.42-6.152,4.535 C59.036,68.753,58.962,68.769,58.889,68.769z"
                />
              </g>
              <g>
                <path
                  fill="#fff"
                  d="M46.458,73.5v-17h-6.021v-5.978h6.021l0-6.216c-0.137-5.577,4.159-11.002,14.104-7.994l-0.021,5.271 l-3.508-0.022c-2.699,0-3.628,0.863-3.628,2.745v6.216h7.157L59.304,56.5h-5.899v17"
                />
                <path
                  fill="#472b29"
                  d="M53.905,73.5h-1V56h5.993l1.048-4.978h-7.041v-6.716c0-2.244,1.273-3.245,4.128-3.245l3.01,0.019 l0.018-4.394c-4.274-1.22-7.779-0.913-10.154,0.896c-1.942,1.479-3.018,3.926-2.949,6.712v6.729h-6.021V56h6.021v17.5h-1V57h-6.021 v-6.978h6.021v-5.716c-0.076-3.099,1.142-5.845,3.343-7.521c1.888-1.438,5.398-2.768,11.406-0.952l0.357,0.107l-0.024,6.145 l-4.009-0.024c-2.614,0-3.125,0.823-3.125,2.245v5.716h7.273L59.71,57h-5.805V73.5z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M50,74.825c-13.757,0-24.95-11.192-24.95-24.95S36.243,24.925,50,24.925s24.95,11.192,24.95,24.95 S63.757,74.825,50,74.825z M50,26.325c-12.985,0-23.55,10.564-23.55,23.55S37.015,73.425,50,73.425s23.55-10.564,23.55-23.55 S62.985,26.325,50,26.325z"
                />
              </g>
            </svg>
          </a>
          <a
            href="https://twitter.com/vitarrico1"
            target="_blank"
            rel="noopener noreferrer"
            className="links-social twiter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="50px"
              height="50px"
            >
              <circle cx="78" cy="14" r="1" fill="#f1bc19" />
              <circle cx="50" cy="50" r="38" fill="#f9dbd2" />
              <circle cx="84" cy="16" r="4" fill="#f1bc19" />
              <circle cx="14" cy="26" r="2" fill="#ee3e54" />
              <circle cx="78" cy="77" r="2" fill="#fbcd59" />
              <circle cx="17" cy="78" r="4" fill="#fbcd59" />
              <circle cx="24" cy="83" r="2" fill="#ee3e54" />
              <circle cx="66.483" cy="78.517" r="2.483" fill="#fff" />
              <circle cx="16" cy="48" r="1" fill="#fff" />
              <circle cx="86" cy="31" r="1" fill="#f1bc19" />
              <circle cx="80" cy="66" r="2" fill="#fff" />
              <g>
                <circle cx="50" cy="50" r="24.25" fill="#78a0cf" />
                <path
                  fill="#472b29"
                  d="M50,74.95c-13.757,0-24.95-11.192-24.95-24.95S36.243,25.05,50,25.05S74.95,36.242,74.95,50 S63.757,74.95,50,74.95z M50,26.45c-12.985,0-23.55,10.564-23.55,23.55S37.015,73.55,50,73.55S73.55,62.985,73.55,50 S62.985,26.45,50,26.45z"
                />
              </g>
              <g>
                <ellipse
                  cx="49.938"
                  cy="50.125"
                  fill="#78a0cf"
                  rx="20.438"
                  ry="20.375"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M69.424,44.75c-0.214,0-0.412-0.139-0.478-0.354c-0.088-0.287-0.183-0.571-0.284-0.853 c-0.392-1.094-0.886-2.159-1.47-3.169c-0.139-0.238-0.057-0.545,0.182-0.683c0.239-0.141,0.545-0.057,0.683,0.183 c0.614,1.061,1.134,2.182,1.546,3.331c0.106,0.297,0.206,0.595,0.298,0.897c0.081,0.264-0.067,0.544-0.332,0.625 C69.521,44.743,69.472,44.75,69.424,44.75z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M50,70.875c-11.511,0-20.875-9.337-20.875-20.813S38.489,29.25,50,29.25 c5.975,0,11.674,2.56,15.636,7.023c0.299,0.337,0.588,0.685,0.865,1.041c0.169,0.218,0.13,0.531-0.087,0.701 c-0.218,0.172-0.532,0.131-0.702-0.088c-0.264-0.339-0.54-0.669-0.824-0.99C61.116,32.688,55.689,30.25,50,30.25 c-10.959,0-19.875,8.888-19.875,19.813S39.041,69.875,50,69.875s19.875-8.888,19.875-19.813c0-0.995-0.075-1.996-0.222-2.973 c-0.041-0.272,0.147-0.527,0.42-0.568c0.278-0.041,0.528,0.147,0.569,0.42c0.154,1.025,0.233,2.076,0.233,3.121 C70.875,61.538,61.511,70.875,50,70.875z"
                />
              </g>
              <g>
                <path
                  fill="#fff"
                  d="M62.941,42.772c-0.897,0.407-1.86,0.682-2.874,0.804c1.033-0.632,1.826-1.634,2.2-2.827 c-0.967,0.585-2.038,1.011-3.176,1.24c-0.913-0.993-2.213-1.614-3.653-1.614c-2.763,0-5.001,2.288-5.001,5.111 c0,0.4,0.044,0.791,0.128,1.165c-4.158-0.213-7.843-2.248-10.31-5.341c-0.43,0.755-0.677,1.633-0.677,2.57 c0,1.774,0.883,3.338,2.224,4.256c-0.819-0.027-1.591-0.256-2.266-0.639c-0.001,0.021-0.001,0.043-0.001,0.064 c0,2.478,1.724,4.544,4.012,5.013c-0.419,0.116-0.861,0.179-1.318,0.179c-0.323,0-0.636-0.032-0.94-0.091 c0.636,2.03,2.484,3.508,4.672,3.55c-1.711,1.371-3.868,2.189-6.211,2.189c-0.404,0-0.803-0.025-1.193-0.071 c2.213,1.449,4.843,2.295,7.668,2.295c9.201,0,14.233-7.789,14.233-14.545c0-0.221-0.006-0.442-0.015-0.662 C61.422,44.697,62.269,43.799,62.941,42.772z"
                />
                <path
                  fill="#472b29"
                  d="M46.225,61.125c-2.82,0-5.566-0.822-7.942-2.377c-0.194-0.127-0.275-0.371-0.196-0.589 s0.3-0.357,0.529-0.325c2.11,0.252,4.237-0.209,6.03-1.308c-1.789-0.481-3.254-1.862-3.834-3.715 c-0.053-0.168-0.013-0.352,0.104-0.483c0.117-0.131,0.296-0.194,0.468-0.156c0.007,0.001,0.013,0.002,0.02,0.003 c-1.444-1.024-2.369-2.731-2.369-4.613c0-0.178,0.095-0.375,0.249-0.464c0.153-0.09,0.344-0.124,0.499-0.035 c0.131,0.074,0.267,0.142,0.404,0.202c-0.711-0.961-1.11-2.144-1.11-3.384c0-0.989,0.257-1.964,0.743-2.817 c0.082-0.145,0.23-0.238,0.396-0.251c0.171-0.012,0.327,0.057,0.43,0.187c2.323,2.91,5.693,4.749,9.324,5.106 c-0.021-0.204-0.032-0.411-0.032-0.619c0-3.094,2.467-5.611,5.5-5.611c1.422,0,2.797,0.567,3.818,1.567 c0.967-0.224,1.892-0.6,2.752-1.12c0.178-0.108,0.404-0.094,0.567,0.034c0.164,0.129,0.231,0.345,0.168,0.543 c-0.204,0.65-0.522,1.252-0.933,1.778c0.313-0.104,0.621-0.224,0.922-0.36c0.203-0.092,0.441-0.039,0.586,0.13 c0.145,0.168,0.161,0.412,0.039,0.599c-0.658,1.008-1.467,1.886-2.406,2.613c0.004,0.141,0.006,0.28,0.006,0.421 C60.958,53.476,55.447,61.125,46.225,61.125z M40.556,58.871c1.774,0.824,3.702,1.254,5.669,1.254 c8.597,0,13.733-7.141,13.733-14.045c0-0.215-0.005-0.429-0.014-0.642c-0.007-0.167,0.069-0.325,0.203-0.424 c0.487-0.358,0.937-0.76,1.347-1.201c-0.448,0.117-0.905,0.203-1.368,0.259c-0.229,0.034-0.455-0.109-0.532-0.332 c-0.077-0.222,0.011-0.468,0.211-0.591c0.539-0.329,0.999-0.766,1.358-1.277c-0.636,0.269-1.296,0.472-1.975,0.607 c-0.171,0.036-0.347-0.022-0.466-0.152c-0.848-0.923-2.045-1.452-3.284-1.452c-2.481,0-4.5,2.068-4.5,4.611 c0,0.36,0.039,0.716,0.116,1.055c0.035,0.152-0.004,0.313-0.105,0.433c-0.101,0.12-0.25,0.189-0.409,0.177 c-3.891-0.2-7.552-1.981-10.164-4.921c-0.196,0.524-0.298,1.085-0.298,1.651c0,1.547,0.75,2.983,2.007,3.843 c0.184,0.126,0.262,0.357,0.193,0.568s-0.275,0.336-0.492,0.345c-0.575-0.02-1.146-0.132-1.686-0.33 c0.309,1.882,1.706,3.4,3.548,3.777c0.226,0.047,0.391,0.242,0.399,0.473c0.008,0.231-0.143,0.438-0.366,0.499 c-0.525,0.146-1.063,0.213-1.612,0.195c0.754,1.469,2.239,2.429,3.902,2.461c0.21,0.004,0.396,0.14,0.463,0.339 s0.004,0.42-0.161,0.552C44.609,57.937,42.646,58.713,40.556,58.871z"
                />
              </g>
            </svg>
          </a>
          <a
            href="https://wa.me/+573153665814"
            target="_blank"
            rel="noopener noreferrer"
            className="links-social wassap"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="50px"
              height="50px"
            >
              <path
                fill="#ee3e54"
                d="M13 27A2 2 0 1 0 13 31A2 2 0 1 0 13 27Z"
              />
              <path
                fill="#f1bc19"
                d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"
              />
              <path
                fill="#fce0a2"
                d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"
              />
              <path
                fill="#f1bc19"
                d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"
              />
              <path
                fill="#ee3e54"
                d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"
              />
              <path
                fill="#fbcd59"
                d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"
              />
              <path
                fill="#ee3e54"
                d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"
              />
              <path
                fill="#fff"
                d="M18.5 51A2.5 2.5 0 1 0 18.5 56A2.5 2.5 0 1 0 18.5 51Z"
              />
              <path
                fill="#f1bc19"
                d="M21 66A1 1 0 1 0 21 68A1 1 0 1 0 21 66Z"
              />
              <path fill="#fff" d="M80 33A1 1 0 1 0 80 35A1 1 0 1 0 80 33Z" />
              <path
                fill="#add4a1"
                d="M51.5,25C38.5,25,28,35.5,28,48.5c0,4.5,1.2,8.6,3.4,12.2L28,71.1l10.1-3.3c3.8,2.7,8.4,4.2,13.4,4.2 C64.5,72,75,61.5,75,48.5S64.5,25,51.5,25z"
              />
              <path
                fill="#472b29"
                d="M51.5,72.7c-4.9,0-9.5-1.4-13.5-4.1l-9.7,3.2c-0.3,0.1-0.5,0-0.7-0.2c-0.2-0.2-0.3-0.5-0.2-0.7l3.3-10.1 c-2.2-3.7-3.3-7.9-3.3-12.3c0-13.3,10.9-24.2,24.2-24.2s24.2,10.9,24.2,24.2S64.8,72.7,51.5,72.7z M38.1,67.1c0.1,0,0.3,0,0.4,0.1 c3.8,2.7,8.3,4.1,13,4.1c12.6,0,22.8-10.2,22.8-22.8c0-12.6-10.2-22.8-22.8-22.8c-12.6,0-22.8,10.2-22.8,22.8 c0,4.2,1.1,8.3,3.3,11.8c0.1,0.2,0.1,0.4,0.1,0.6L29.1,70l8.7-2.9C37.9,67.1,38,67.1,38.1,67.1z"
              />
              <path
                fill="#5aba9e"
                d="M66.6,37.1c-3.5-4.5-8.9-7.5-15.1-7.5c-10.4,0-18.9,8.5-18.9,18.9c0,3.9,1.2,7.6,3.3,10.6l-2,6.2l6-1.9 c3.2,2.5,7.3,4.1,11.7,4.1c10.4,0,18.9-8.5,18.9-18.9c0-1.1-0.1-2.1-0.3-3.2"
              />
              <path
                fill="#472b29"
                d="M51.5,67.9c-4.3,0-8.4-1.4-11.8-4L34,65.8c-0.2,0.1-0.4,0-0.5-0.1c-0.1-0.1-0.2-0.3-0.1-0.5l1.9-6 c-2.1-3.2-3.2-6.9-3.2-10.7c0-10.7,8.7-19.4,19.4-19.4c6.1,0,11.8,2.8,15.5,7.7c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.2-0.5,0.1-0.7-0.1 c-3.5-4.6-8.9-7.3-14.7-7.3c-10.1,0-18.4,8.3-18.4,18.4c0,3.7,1.1,7.3,3.2,10.3c0.1,0.1,0.1,0.3,0.1,0.4l-1.7,5.3l5-1.6 c0.2-0.1,0.3,0,0.5,0.1c3.3,2.6,7.2,4,11.4,4c10.1,0,18.4-8.3,18.4-18.4c0-1-0.1-2.1-0.3-3.1c0-0.3,0.1-0.5,0.4-0.6 c0.3,0,0.5,0.1,0.6,0.4c0.2,1.1,0.3,2.2,0.3,3.2C70.9,59.2,62.2,67.9,51.5,67.9z"
              />
              <g>
                <path
                  fill="#5aba9e"
                  d="M69.5,42.6c-0.4-1.1-0.9-2.2-1.4-3.3"
                />
                <path
                  fill="#472b29"
                  d="M69.5,43.1c-0.2,0-0.4-0.1-0.5-0.3c-0.4-1.1-0.8-2.2-1.4-3.2c-0.1-0.2,0-0.5,0.2-0.7c0.2-0.1,0.5,0,0.7,0.2 c0.6,1.1,1.1,2.2,1.5,3.3c0.1,0.3-0.1,0.5-0.3,0.6C69.6,43.1,69.5,43.1,69.5,43.1z"
                />
              </g>
              <g>
                <path
                  fill="#fdfcee"
                  d="M59.1,58.7c-1.4,0-3.4-0.5-6.3-1.7c-3.8-1.5-7.6-4.6-10.7-8.8l-0.2-0.2c-0.9-1.2-2.5-3.6-2.5-6 c-0.1-1.8,0.7-3.6,2.2-4.8c0.5-0.4,1.2-0.6,1.8-0.6l0.2,0l0.7,0c0,0,0.1,0,0.2,0s0.1,0,0.2,0c0.1,0,0.2,0.1,0.3,0.2 c0.2,0.2,0.3,0.4,0.4,0.7l0.8,1.7c0.6,1.3,1.1,2.5,1.2,2.6c0.1,0.1,0.3,0.5,0.1,0.9c-0.2,0.3-0.4,0.6-0.6,0.8 c-0.1,0.2-0.2,0.3-0.3,0.4L46.3,44c-0.1,0.1-0.4,0.4-0.6,0.6c-0.5,0.5-0.6,1.1-0.3,1.6c1,1.6,2.2,3,3.7,4.2c1.5,1.3,3.2,2.3,5.1,3 l0.2,0.1c0.2,0.1,0.5,0.2,0.8,0.2c0.5,0,0.9-0.2,1.2-0.5c0.5-0.6,1-1.2,1.5-1.8l0.3-0.4c0.1-0.1,0.3-0.4,0.7-0.4 c0.1,0,0.3,0,0.4,0.1c0.5,0.2,3.3,1.4,4.3,1.9l0.4,0.2l0.5,0.2c0.2,0.1,0.3,0.2,0.3,0.4c0,0.9-0.1,1.7-0.4,2.5 c-0.5,1.2-2.5,2.4-4.1,2.7C60,58.7,59.6,58.7,59.1,58.7z"
                />
                <path
                  fill="#472b29"
                  d="M44.4,37.1c0.1,0,0.1,0,0.2,0c0.1,0.1,0.2,0.3,0.3,0.5l0.6,1.3c0.8,1.7,1.3,3,1.4,3.2s0.1,0.3,0.1,0.4 c-0.1,0.3-0.3,0.5-0.5,0.7l-0.1,0.1c-0.1,0.1-0.3,0.3-0.4,0.4c-0.1,0.1-0.4,0.4-0.6,0.6c-0.7,0.6-0.8,1.5-0.3,2.2 c1,1.6,2.3,3.1,3.8,4.3c1.5,1.3,3.3,2.3,5.2,3l0.2,0.1c0.3,0.1,0.6,0.2,0.9,0.2c0.6,0,1.2-0.2,1.6-0.6c0.5-0.6,1.1-1.2,1.5-1.8 l0.3-0.4c0.1-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2,0,0.3,0.1c0.5,0.2,3.2,1.4,4.3,1.9l0.4,0.2l0.5,0.2c0,0.8-0.1,1.6-0.4,2.3 c-0.4,1.1-2.2,2.1-3.7,2.4c-0.3,0.1-0.6,0.1-1.1,0.1c-1,0-2.7-0.3-6.2-1.6c-3.7-1.4-7.5-4.5-10.5-8.6l-0.2-0.2 c-0.9-1.2-2.4-3.4-2.4-5.7c-0.1-1.7,0.7-3.3,2-4.5c0.4-0.3,1-0.5,1.5-0.5c0,0,0.1,0,0.1,0c0.3,0,0.5,0,0.7,0 C44.2,37.1,44.3,37.1,44.4,37.1 M44.4,36.1c-0.1,0-0.1,0-0.2,0h-0.6c-0.1,0-0.1,0-0.2,0c-0.8,0-1.5,0.3-2.1,0.7c0,0,0,0,0,0 c-1.6,1.3-2.4,3.3-2.4,5.2c0,2.5,1.7,5,2.7,6.3l0.2,0.2c3.1,4.2,7,7.4,10.9,8.9c3,1.2,5.1,1.7,6.5,1.7c0.6,0,1-0.1,1.3-0.1 c1.7-0.3,3.9-1.5,4.4-3c0.3-0.8,0.5-1.8,0.5-2.7c0-0.4-0.3-0.7-0.6-0.9l-0.5-0.2l-0.4-0.2c-0.9-0.4-3.8-1.8-4.4-2 c-0.1,0-0.3-0.1-0.6-0.1c-0.7,0-1,0.5-1.1,0.6l-0.3,0.4c-0.5,0.6-0.9,1.2-1.4,1.7c-0.2,0.2-0.5,0.3-0.9,0.3c-0.2,0-0.4,0-0.5-0.1 l-0.2-0.1c-1.8-0.7-3.5-1.6-4.9-2.9c-1.4-1.2-2.6-2.6-3.6-4.1c-0.2-0.3-0.1-0.7,0.1-0.9c0,0,0.1-0.1,0.1-0.1 c0.2-0.2,0.4-0.4,0.5-0.6l0.1-0.1c0.1-0.1,0.2-0.2,0.3-0.3l0,0c0.3-0.3,0.5-0.6,0.7-0.9c0.2-0.3,0.3-0.8-0.1-1.4 c-0.1-0.2-0.6-1.3-1.2-2.6l-0.2-0.5l-0.6-1.3c-0.1-0.3-0.3-0.6-0.5-0.8c-0.2-0.2-0.4-0.3-0.6-0.3C44.5,36.1,44.4,36.1,44.4,36.1 L44.4,36.1z"
                />
              </g>
            </svg>
          </a>
        </div>
        <div className="location-wrapper">
          <a
            href="https://www.google.com/maps?ll=6.241947,-75.610461&z=15&t=m&hl=es-ES&gl=US&mapclient=embed&cid=3970465354079214528"
            target="_blank"
            rel="noopener noreferrer"
            className="links-social google-maps"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="50px"
              height="50px"
            >
              <path
                fill="#ee3e54"
                d="M13 27A2 2 0 1 0 13 31A2 2 0 1 0 13 27Z"
              />
              <path
                fill="#f1bc19"
                d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"
              />
              <path
                fill="#fce0a2"
                d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"
              />
              <path
                fill="#f1bc19"
                d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"
              />
              <path
                fill="#ee3e54"
                d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"
              />
              <path
                fill="#fbcd59"
                d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"
              />
              <path
                fill="#ee3e54"
                d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"
              />
              <path
                fill="#fff"
                d="M18.5 51A2.5 2.5 0 1 0 18.5 56A2.5 2.5 0 1 0 18.5 51Z"
              />
              <path
                fill="#f1bc19"
                d="M21 66A1 1 0 1 0 21 68A1 1 0 1 0 21 66Z"
              />
              <path
                fill="#fff"
                d="M80 33A1 1 0 1 0 80 35A1 1 0 1 0 80 33Z"
              />
              <path
                fill="#67ba8c"
                d="M35.304,71.3c-3.642,0-6.604-2.963-6.604-6.604V37.305c0-3.642,2.962-6.604,6.604-6.604h27.391 c3.642,0,6.604,2.963,6.604,6.604v27.391c0,3.642-2.963,6.604-6.604,6.604H35.304z"
              />
              <path
                fill="#472b29"
                d="M62.696,31.4c3.256,0,5.904,2.649,5.904,5.905v27.391c0,3.256-2.649,5.905-5.904,5.905H35.304 c-3.256,0-5.904-2.649-5.904-5.905V37.304c0-3.256,2.649-5.905,5.904-5.905H62.696 M62.696,30H35.304 C31.287,30,28,33.287,28,37.304v27.391C28,68.713,31.287,72,35.304,72h27.391C66.713,72,70,68.713,70,64.696V37.304 C70,33.287,66.713,30,62.696,30L62.696,30z"
              />
              <path
                fill="#472b29"
                d="M66.132,48.654c-0.276,0-0.5-0.224-0.5-0.5v-3.536c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5 v3.536C66.632,48.431,66.408,48.654,66.132,48.654z"
              />
              <g>
                <path
                  fill="#472b29"
                  d="M66.132,42.38c-0.276,0-0.5-0.224-0.5-0.5v-1.826c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5 v1.826C66.632,42.156,66.408,42.38,66.132,42.38z"
                />
              </g>
              <g>
                <path
                  fill="#3e7bf1"
                  d="M49.703,54.772c0,0-11.129,10.692-15.504,15.708c0.436,0.103,0.889,0.162,1.356,0.162h27.382 c0.731,0,1.429-0.139,2.077-0.382C60.513,65.157,49.703,54.772,49.703,54.772z"
                />
                <path
                  fill="#472b29"
                  d="M62.938,70.893H35.555c-0.461,0-0.937-0.057-1.413-0.169l-0.404-0.095l0.272-0.313 c4.331-4.968,15.407-15.617,15.519-15.725l0.173-0.166l0.173,0.166c0.108,0.104,10.87,10.451,15.326,15.504l0.24,0.272l-0.34,0.127 C64.396,70.759,63.668,70.893,62.938,70.893z M34.673,70.32c0.298,0.048,0.593,0.072,0.882,0.072h27.382 c0.551,0,1.102-0.083,1.641-0.247c-4.256-4.765-13.494-13.695-14.875-15.026C48.305,56.467,38.855,65.602,34.673,70.32z"
                />
              </g>
              <g>
                <path
                  fill="#fffef4"
                  d="M46.622,54.083L63.17,70.631c1.978-0.077,3.71-1.119,4.733-2.674L50.326,50.379L46.622,54.083z"
                />
                <path
                  fill="#472b29"
                  d="M63.07,70.885L46.269,54.083l4.057-4.058l17.899,17.899l-0.112,0.17 c-1.099,1.667-2.942,2.708-4.933,2.786L63.07,70.885z M46.976,54.083l16.293,16.293c1.721-0.101,3.312-0.983,4.312-2.389 L50.326,50.732L46.976,54.083z"
                />
              </g>
              <g>
                <path
                  fill="#bebacb"
                  d="M51.985,52.49c0,0,10.858,11.303,15.824,15.605c0.674-0.964,1.073-2.134,1.073-3.397V37.316 c0-0.418-0.045-0.826-0.127-1.22C64.411,39.555,51.985,52.49,51.985,52.49z"
                />
                <path
                  fill="#472b29"
                  d="M67.854,68.465l-0.21-0.182c-4.917-4.26-15.731-15.507-15.841-15.62l-0.166-0.173l0.166-0.173 C51.929,52.188,64.292,39.331,68.6,35.9l0.317-0.253L69,36.045c0.087,0.422,0.132,0.85,0.132,1.271v27.383 c0,1.27-0.387,2.493-1.118,3.54L67.854,68.465z M52.331,52.49c1.369,1.42,10.78,11.154,15.427,15.229 c0.573-0.908,0.874-1.947,0.874-3.021V37.315c0-0.25-0.018-0.504-0.051-0.756C64.327,40.079,53.787,50.98,52.331,52.49z"
                />
              </g>
              <g>
                <path
                  fill="#fde751"
                  d="M35.269,70.628l33.599-33.599c-0.095-1.97-1.147-3.689-2.706-4.701L30.568,67.921 C31.579,69.48,33.299,70.533,35.269,70.628z"
                />
                <path
                  fill="#472b29"
                  d="M35.367,70.883l-0.111-0.005c-1.984-0.096-3.815-1.15-4.898-2.821l-0.11-0.17l0.143-0.143 l35.737-35.736l0.169,0.11c1.671,1.084,2.725,2.916,2.82,4.899l0.005,0.11L35.367,70.883z M30.89,67.952 c0.986,1.409,2.566,2.304,4.281,2.42l33.44-33.44c-0.116-1.714-1.011-3.294-2.419-4.281L30.89,67.952z"
                />
              </g>
              <g>
                <path
                  fill="#fff"
                  d="M39.825,40.375v2.398h3.418c-0.45,1.453-1.662,2.491-3.418,2.491c-2.09,0-3.784-1.694-3.784-3.784 c0-2.095,1.694-3.788,3.784-3.788c0.94,0,1.801,0.348,2.46,0.914l1.765-1.765c-1.114-1.016-2.594-1.636-4.225-1.636 c-3.467,0-6.275,2.812-6.275,6.275c0,3.463,2.808,6.275,6.275,6.275c5.491,0,6.431-4.925,5.914-7.371L39.825,40.375z"
                />
                <path
                  fill="#472b29"
                  d="M39.825,48.005c-3.598,0-6.525-2.927-6.525-6.524s2.927-6.525,6.525-6.525 c1.631,0,3.191,0.604,4.394,1.701l0.193,0.177l-2.113,2.113l-0.176-0.151c-0.642-0.55-1.458-0.853-2.298-0.853 c-1.948,0-3.534,1.587-3.534,3.538c0,1.948,1.585,3.533,3.534,3.533c1.423,0,2.545-0.737,3.063-1.991h-3.313v-2.897l6.367,0.009 l0.042,0.198c0.335,1.585,0.068,3.929-1.282,5.595C43.583,47.306,41.942,48.005,39.825,48.005z M39.825,35.455 c-3.322,0-6.025,2.703-6.025,6.025s2.703,6.024,6.025,6.024c1.959,0,3.47-0.637,4.488-1.894c1.191-1.47,1.468-3.518,1.219-4.978 l-5.457-0.009v1.897h3.508l-0.101,0.324c-0.518,1.67-1.885,2.667-3.657,2.667c-2.224,0-4.034-1.81-4.034-4.033 c0-2.227,1.81-4.038,4.034-4.038c0.882,0,1.741,0.292,2.443,0.827l1.417-1.416C42.603,35.95,41.243,35.455,39.825,35.455z"
                />
              </g>
              <g>
                <path
                  fill="#ea4989"
                  d="M62.424,23.511c-6.302,0-11.409,5.107-11.409,11.409c0,7.773,8.744,10.607,10.647,22.649 c0.125,0.775,0.134,1.31,0.762,1.31c0.628,0,0.637-0.535,0.762-1.31c1.903-12.042,10.647-14.877,10.647-22.649 C73.833,28.618,68.726,23.511,62.424,23.511z"
                />
                <path
                  fill="#472b29"
                  d="M62.424,59.379c-0.994,0-1.125-0.87-1.221-1.505l-0.034-0.226 c-0.981-6.207-3.814-9.916-6.313-13.188c-2.329-3.051-4.341-5.685-4.341-9.54c0-6.566,5.343-11.909,11.909-11.909 s11.909,5.343,11.909,11.909c0,3.855-2.012,6.489-4.341,9.539c-2.499,3.273-5.331,6.982-6.312,13.188l-0.035,0.227 C63.55,58.509,63.419,59.379,62.424,59.379z M62.424,24.011c-6.016,0-10.909,4.894-10.909,10.909c0,3.518,1.916,6.026,4.136,8.933 c2.571,3.367,5.485,7.184,6.506,13.639l0.036,0.234c0.037,0.245,0.087,0.581,0.151,0.648l0.168-0.006 c0.058-0.062,0.108-0.397,0.145-0.644l0.037-0.234c1.02-6.455,3.934-10.271,6.505-13.638c2.219-2.906,4.135-5.415,4.135-8.933 C73.333,28.904,68.439,24.011,62.424,24.011z"
                />
              </g>
              <g>
                <path
                  fill="#fffef4"
                  d="M66.417,34.92c0,2.206-1.787,3.993-3.993,3.993c-2.206,0-3.993-1.787-3.993-3.993 c0-2.206,1.787-3.993,3.993-3.993C64.63,30.927,66.417,32.714,66.417,34.92z"
                />
                <path
                  fill="#472b29"
                  d="M62.424,39.413c-2.478,0-4.493-2.016-4.493-4.493s2.016-4.493,4.493-4.493s4.493,2.016,4.493,4.493 S64.901,39.413,62.424,39.413z M62.424,31.427c-1.926,0-3.493,1.567-3.493,3.493s1.567,3.493,3.493,3.493s3.493-1.567,3.493-3.493 S64.35,31.427,62.424,31.427z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M63.327,48.215c-0.079,0-0.158-0.019-0.232-0.058c-0.244-0.128-0.339-0.43-0.21-0.675 c1.426-2.721,4.126-6.231,5.279-7.73c0.258-0.337,0.435-0.565,0.493-0.652c0.839-1.241,1.282-2.691,1.282-4.194 c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5c0,1.703-0.502,3.348-1.453,4.754c-0.063,0.093-0.252,0.34-0.53,0.702 c-1.137,1.479-3.8,4.941-5.187,7.586C63.681,48.117,63.507,48.215,63.327,48.215z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M70.149,33.265c-0.22,0-0.421-0.146-0.481-0.367c-0.174-0.628-0.432-1.233-0.767-1.801 c-0.357-0.604-0.797-1.155-1.307-1.638c-0.2-0.189-0.209-0.506-0.02-0.707c0.19-0.199,0.507-0.21,0.707-0.02 c0.577,0.547,1.076,1.171,1.48,1.856c0.379,0.643,0.672,1.33,0.868,2.043c0.074,0.266-0.082,0.541-0.349,0.614 C70.238,33.259,70.193,33.265,70.149,33.265z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M66.115,28.298c-0.078,0-0.156-0.018-0.229-0.056c-1.072-0.556-2.232-0.837-3.447-0.837 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5c1.357,0,2.708,0.328,3.906,0.948c0.246,0.127,0.342,0.429,0.215,0.674 C66.471,28.199,66.296,28.298,66.115,28.298z"
                />
              </g>
            </svg>
          </a>
        </div>
      </>
    );
  }
}

export default Content;
