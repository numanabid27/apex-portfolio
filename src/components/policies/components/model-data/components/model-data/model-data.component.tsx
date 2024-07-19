import { CustomSwitch } from "@/common/components/custom-switch/custom-switch.component";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { Issue } from "../Issue/issue.component";
import { Description } from "../description/description.component";
import { UseBy } from "../use-by/use-by.component";
import { PolicyAccordian } from "../../model-accordian";
import { ModalDataStyle } from "./modal-data.style";
import { ButtonComponent } from "@/common/components/button/button";
import pencil from "@/common/assets/images/pencil.svg";
import view from "@/common/assets/images/view.svg";
import copy from "@/common/assets/images/copy.svg";
import Severity from "@/components/create-policy/component/severityLevel/severty.component";
import downArrow from "@/common/assets/images/downs.svg";
import { POLICIES_GPT } from "./modal-data.constants";
import { useRouter } from "next/navigation";

export const ModelData = ({
  selectedRow,
  setIsModel,
  setOpenModal,
  setIsPrompt,
  setIsGenerate,
  isGenerate,
  createPolicy,
}: any) => {
  const PolicyData = [
    {
      id: 1,
      title: "Issues over time",
      desc: Issue,
    },
  ];
  const router = useRouter();
  return (
    <>
      <Box sx={ModalDataStyle.ModalGrid}>
        <Grid container mb={8}>
          <Grid sm={9} xs={12} display="flex" gap="10px">
            <ButtonComponent title="Edit" icon={pencil} />
            <ButtonComponent title="View" icon={view} />
            <ButtonComponent title="Duplicate" icon={copy} />
          </Grid>
          <Grid
            sm={3}
            xs={12}
            display="flex"
            justifyContent={{ sm: "flex-end", xs: "flex-start" }}
            mt={{ sm: 0, xs: 2 }}
          >
            <Button
              sx={ModalDataStyle.delete}
              onClick={() => {
                setIsModel(true), setOpenModal(false);
              }}
            >
              Delete
            </Button>
          </Grid>
        </Grid>

        {createPolicy ? (
          <>
            <Typography sx={ModalDataStyle.ModalTypo}>
              {selectedRow.type}
            </Typography>
              <Typography sx={ModalDataStyle.ModalDesc} pb={2}>
                {selectedRow.desc}
              </Typography>
          </>
        ) : (
          <>
            <Typography sx={ModalDataStyle.ModalTypo}>
              {selectedRow?.policyName}
            </Typography>
            {selectedRow?.longDesc?.map((item: any, i: number) => {
              return (
                <Typography
                  sx={ModalDataStyle.ModalDesc}
                  key={i.toString()}
                  pb={2}
                >
                  {item.desc}
                </Typography>
              );
            })}

            <Box mt={6}>
              <Typography pb={3} fontSize="14px" color="#667084">
                Groups
              </Typography>
              <Box display="flex" gap="10px">
                {selectedRow.groups.groupName?.map((items: any, i: number) => (
                  <Typography
                    variant="h6"
                    key={i.toString()}
                    sx={ModalDataStyle.groupNames}
                  >
                    {items.name1}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* policy suggestions */}
            {selectedRow?.policyName.includes("Github Copilot Policy") && (
              <Box sx={ModalDataStyle.suggestion}>
                <Grid container justifyContent="space-between" mb={3.2}>
                  <Grid sm={5.5} xs={7}>
                    <Typography variant="h6" fontWeight={400} color="#156FEE">
                      Policy suggestion{" "}
                    </Typography>
                  </Grid>
                  <Grid
                    sm={5.5}
                    xs={5}
                    display="flex"
                    justifyContent="flex-end"
                  >
                    <Button sx={ModalDataStyle.button}>Close</Button>
                  </Grid>
                </Grid>

                <Box sx={ModalDataStyle.morePolicy}>
                  <Typography fontWeight={500}>
                    This is the description of the policy lorem ipsum dolor sit
                    amet consectetur adipiscing elit sed do eiusmod tempor
                    incididunt ut labore et This is the description of the
                    policy
                  </Typography>
                  <Button>Active</Button>
                </Box>

                <Box sx={ModalDataStyle.morePolicy}>
                  <Typography fontWeight={500}>
                    This is the description of the policy lorem ipsum dolor sit
                    amet consectetur adipiscing elit sed do eiusmod tempor
                    incididunt ut labore et This is the description of the
                    policy
                  </Typography>
                  <Button>Active</Button>
                </Box>
              </Box>
            )}
          </>
        )}
      </Box>

      <Box sx={ModalDataStyle.ModalData}>
        {PolicyData.map((item: any) => {
          return (
            <Box key={item.id} sx={ModalDataStyle.ModalAccordin}>
              <PolicyAccordian
                id={item.id}
                title={item.title}
                DescCom={item.desc}
                selectedRow={selectedRow}
              />
            </Box>
          );
        })}
      </Box>

      {/* run test model */}
      <Box sx={ModalDataStyle.run_test}>
        <Box position="relative">
          <Severity
            title="Select Engine"
            img={downArrow}
            severity={POLICIES_GPT}
            ltr={true}
          />
        </Box>

        <Box sx={ModalDataStyle.promptBox}>
          <Typography variant="h6">Prompt</Typography>
          <Button
            onClick={() => {
              setIsGenerate(true);
            }}
          >
            Auto generate
          </Button>
          <textarea
            placeholder={
              isGenerate
                ? "Jhon_doe@gmail.com is auto generating progress. Click on Run Test"
                : "Write a prompt"
            }
            disabled={isGenerate ? true : false}
            rows={7}
          ></textarea>
        </Box>

        <Button
          sx={ModalDataStyle.testBtn}
          onClick={() => {
            if (isGenerate) {
              setIsPrompt(false);
              router.push("/policies/prompt");
            } else {
              setIsPrompt(true);
              setOpenModal(false);
            }
          }}
        >
          Run Test
        </Button>
      </Box>
    </>
  );
};
