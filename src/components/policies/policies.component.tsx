"use client";

import CustomDialog from "@/common/components/custom-dialog/custom-dialog.component";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { POLICIES_LISTENING } from "./policies.constant";
import usePolicies from "./use-policies.hook";
import { styles } from "./policy.style";
import { CustomSwitch } from "@/common/components/custom-switch/custom-switch.component";
import Image from "next/image";
import policies from "@/common/assets/images/policies.svg";
import CheckBoxComponent from "../create-policy/component/checkbox.component";
import pencil from "@/common/assets/images/pencil.svg";
import play from "@/common/assets/images/play-btn.svg";
import Severity from "../create-policy/component/severityLevel/severty.component";
import downArrow from "@/common/assets/images/downs.svg";
import { POLICIES_GPT } from "./components/model-data/components/model-data/modal-data.constants";
import AddIcon from "@mui/icons-material/Add";
import gemini from "@/common/assets/images/gemini.svg";
import { useState } from "react";
import { POLICIES_CHECKBOX_FILTER } from "../create-policy/createPolicy.constant";
import PolicyFilters from "../create-policy/component/filters";
import useFilterPolicy from "../create-policy/use-createPolicies.hook";
import Link from "next/link";

function Policies() {
  const {
    openModal,
    setOpenModal,
    selectedRow,
    setSelectedRow,
    setIsModel,
    isModel,
    isPrompt,
    setIsPrompt,
  } = usePolicies();
  const [isGenerate, setIsGenerate] = useState(false);
  const {
    finalData,
    engineName,
    setEngineName,
    startDate,
    endDate,
    setDateRange,
    isStatus,
    setIsStatus,
    setIsPolicyName,
    isPolicyName,
    setPolicyAction,
    PolicyAction,
    setWokFlow,
    workFlow,
  } = useFilterPolicy();

  return (
    <Grid container item xs={12} sx={styles.pliciesSec}>
      <Box sx={styles.poiciesInner}>
        {POLICIES_CHECKBOX_FILTER?.map((item: any, i: number) => {
          return (
            <CheckBoxComponent
              id={item?.id}
              key={i.toString()}
              label={item?.value}
              check={item?.check}
              policy={true}
              checkedValue={item?.checkedValue}
              enable={item?.enable}
            />
          );
        })}
      </Box>

      <PolicyFilters
        users={false}
        policies={false}
        engineName={engineName}
        setEngineName={setEngineName}
        startDate={startDate}
        endDate={endDate}
        setDateRange={setDateRange}
        isStatus={isStatus}
        setIsStatus={setIsStatus}
        setIsPolicyName={setIsPolicyName}
        isPolicyName={isPolicyName}
        setPolicyAction={setPolicyAction}
        PolicyAction={PolicyAction}
        setWokFlow={setWokFlow}
        workFlow={workFlow}
      />

      {POLICIES_LISTENING.map((items: any) => {
        return (
          <Grid
            container
            sx={styles.polices_grid}
            key={items.id}
            onClick={() => {
              setOpenModal(true);
              setSelectedRow(items);
            }}
          >
            <Grid
              sm={5.8}
              xs={12}
              display="flex"
              alignItems="center"
              gap="48px"
            >
              <Box onClick={(e: any) => e.stopPropagation()}>
                <CustomSwitch defaultChecked />
              </Box>
              <Box display="flex" alignItems="center" gap="20px">
                <Image src={policies} alt="policies" width={79} height={80} />
                <Box sx={styles.policies_info}>
                  <Typography variant="h5">{items.policyName}</Typography>
                  <Typography variant="h6">
                    {items.policyDesc.slice(0, 80) + " ..."}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid sm={4.3} xs={12} sx={styles.group}>
              <Typography variant="h6" mb={2}>
                {items.groups.title}
              </Typography>
              <Box display="flex" gap="8px">
                {items.groups.groupName?.map((innerItem: any, i: number) => (
                  <Chip
                    label={innerItem.name1}
                    sx={styles.groupChip}
                    variant="outlined"
                    key={i.toString()}
                  />
                ))}
              </Box>
            </Grid>
            <Grid sm={1.5} sx={styles.actionText}>
              <Link
                href={`policies/edit-policy?title=${encodeURIComponent(
                  items.policyName.replace(/\s+/g, "-")
                )}`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Image src={pencil} alt="" width={18} height={18} />
              </Link>
              <Box
                onClick={(e) => {
                  e.stopPropagation();
                }}
                display="flex"
                gap="10px"
                alignItems="center"
              >
                <Image src={play} alt="" width={18} height={18} />
                Test
              </Box>
            </Grid>
          </Grid>
        );
      })}

      {/* delete policy model */}
      {isModel && (
        <Box sx={styles.deleteBackdrop}>
          <Box sx={{ ...styles.deleteModel, background: "#fff" }}>
            <Typography variant="h5">Delete Policy</Typography>
            <Typography variant="h6">
              By proceeding, you will permanently lose all data associated with
              this policy. Are you sure you want to permanently delete this
              policy?
            </Typography>
            <Box display="flex" justifyContent="flex-end" gap="10px">
              <Button
                onClick={() => {
                  setIsModel(false);
                }}
                sx={styles.cancel}
              >
                Cancel
              </Button>
              <Button sx={styles.del}>Yes, delete it</Button>
            </Box>
          </Box>
        </Box>
      )}

      {/* prompt model */}
      {isPrompt && (
        <Box sx={styles.deleteBackdrop}>
          <Box
            sx={{ ...styles.deleteModel, background: "#F9FAFB" }}
            className="modelMain"
          >
            <Box sx={styles.actionBtn}>
              <Severity
                title="Select Engine"
                img={downArrow}
                severity={POLICIES_GPT}
                ltr={true}
              />
              <Button className="testBtn">
                <AddIcon />
                New Test
              </Button>
            </Box>

            <Box sx={styles.promptBox}>
              <Typography variant="h6">Prompt</Typography>
              <textarea
                placeholder="What's my email address number?"
                rows={7}
              ></textarea>

              <Box sx={styles.bard}>
                <Image src={gemini} alt="" />
                <Box>
                  <Typography color="#374151" pb={1} fontWeight={500}>
                    Your email is
                  </Typography>
                  <Typography color="#D92D20" fontWeight={500}>
                    Jhon_doe@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={styles.voilationBox}>
                <Typography variant="h4">
                  <span>1 Violations: </span>
                  PII (email)
                </Typography>
                <Box sx={styles.piBox}>
                  <Typography variant="h2">PII</Typography>
                  <Typography color="#374151" pt={2}>
                    Personally identifiable information (PII) is any information
                    connected to a specific individual that can be used to
                    uncover that individuals identity, such as their social
                    security number, full name, email address or phone number.
                  </Typography>
                </Box>
                <Box sx={styles.piBox}>
                  <Typography variant="h2">Email</Typography>
                  <Typography color="#374151" pt={2}>
                    Personally identifiable information (PII) is any information
                    connected to a specific individual that can be used to
                    uncover
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box display="flex" justifyContent="center" gap="10px">
              <Button className="runTest">Run Test</Button>
              <Button
                className="testBtn"
                onClick={() => {
                  setIsPrompt(false);
                }}
              >
                Stop
              </Button>
            </Box>
          </Box>
        </Box>
      )}

      <CustomDialog
        selectedRow={selectedRow}
        thead={"policy"}
        openModal={openModal}
        setOpenModal={setOpenModal}
        setIsModel={setIsModel}
        setIsPrompt={setIsPrompt}
        setIsGenerate={setIsGenerate}
        isGenerate={isGenerate}
      />
    </Grid>
  );
}

export default Policies;
