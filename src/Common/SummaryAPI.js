const backendDomain = "http://localhost:5050";

const SummaryApi = {
  fastTrackForm: {
    url: `${backendDomain}/api/fastTrackForm`,
    method: "post",
  },

  empowermentForm: {
    url: `${backendDomain}/api/empowermentForm`,
    method: "post",
  },

  jetForm: {
    url: `${backendDomain}/api/jetForm`,
    method: "get",
  },
  contactForm: {
    url: `${backendDomain}/api/contactForm`,
    method: "get",
  },
  mpcjForm: {
    url: `${backendDomain}/api/mpcjForm`,
    method: "get",
  },
  tpmForm: {
    url: `${backendDomain}/api/tpmForm`,
    method: "get",
  },
  prevPaper: {
    url: `${backendDomain}/api/prevPaper`,
    method: "get",
  },
};
export default SummaryApi;
