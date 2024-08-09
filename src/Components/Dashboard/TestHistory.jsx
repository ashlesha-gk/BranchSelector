import { getTestLogo, testMetaData } from "../../services/testService";
import { BsArrowClockwise } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { BsFileBarGraphFill } from "react-icons/bs";
import { CgAlignBottom } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export const TestHistory = ({ testHistory }) => {
  const navigate = useNavigate();
  return (
    <>
      {testHistory.length > 0 ? (
        <div className="flex flex-col items-center mt-7 w-full">
          <div className="w-[90%] sm:w-[80%]">
            <h2 className="text-lg sm:text-2xl font-semibold">Test History</h2>
            {testHistory.map((test, index) => 
            {
              const TestIcon = testMetaData[test['test-name']].icon
              return (
                <div
                  key={index}
                  className="flex justify-between items-center bg-[#f8f9fb] shadow-blue-200 p-1 shadow-lg w-full h-24 sm:h-44  my-4 rounded-lg"
                >
                  <div className="w-[16em] flex items-center">
                    <div className="hidden sm:flex ml-3 self-center">
                      <TestIcon className="text-gray-700" size={100} />
                    </div>
                    <div className="flex sm:hidden self-center">
                      <TestIcon className="text-gray-700" size={40} />
                    </div>
                  </div>
                  <div className="mt-2 font-bold text-primary text-xs sm:text-2xl w-[40%] flex flex-col mr-3 sm:mr-0">
                    <h3>{testMetaData[test["test-name"]].name}</h3>
                    <p className="text-[8px] sm:text-sm font-medium text-black">
                      Completed on {test.time.split(",")[0]}
                    </p>
                  </div>
                  <div className="w-[20em] h-full p-2 flex">
                    <button
                      onClick={() => {
                        const { icon, ...testState } = testMetaData[test["test-name"]];
                        navigate("/testInstruction", {
                          state: {
                            testMetaData: testState,
                          },
                        });
                      }}
                      className="flex rounded-md flex-col justify-center items-center h-16 sm:h-32 w-16 sm:w-[10em] shadow-blue-200 p-6 shadow-lg mx-1 sm:mx-3 bg-white py-3 mt-2 "
                    >
                      <BsArrowClockwise className="text-2xl sm:text-5xl" />
                      <p className="text-center text-primary font-bold mt-1 text-xs sm:text-base">
                        Retest
                      </p>
                    </button>
                    <button className="flex rounded-md flex-col justify-center items-center h-16 sm:h-32 w-16 sm:w-[10em] shadow-blue-200 p-6 shadow-lg mx-1 sm:mx-3 bg-white py-3 mt-2 "
                    onClick={()=>{

                      navigate('/result',{
                        state:{result: JSON.parse(test['result']), testName: test['test-name']}
                      })
                    }}
                    >
                      <CgAlignBottom className="text-2xl sm:text-5xl" />
                      <p className="text-center text-primary font-bold mt-1 text-xs sm:text-base">
                        Results
                      </p>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center mt-7 w-full">
            <div className="w-[80%]">
              <h2 className="text-lg lg:text-2xl font-semibold">Test History</h2>
              <div className="bg-[#e4ecff] rounded-sm my-5 h-[12em] w-full flex flex-col justify-center items-center">
                <h3 className="text-lg  lg:text-2xl font-semibold">No tests taken</h3>
                <button className="mt-2 bg-primary text-white font-semibold p-1 px-5 rounded text-sm">
                  Go to tests
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
