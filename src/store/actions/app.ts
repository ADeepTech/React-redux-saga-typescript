import { createAction, createAsyncAction } from "typesafe-actions"

import { PortingLocation, PortingProject } from "../../models/app"
import { SolutionToPortingProjects } from "../reducers/app"

export interface SetPortingLocationPayload {
    solutionPath: string
    portingLocation: PortingLocation | undefined
}
export const setPortingLocation = createAction("setPortingLocation")<SetPortingLocationPayload>()

export interface SetPortingProjectConfig {
    solutionPath: string
    projectPath: string
    portingLocation: PortingLocation
    config: Partial<PortingProject>
}
export const setPortingProjectConfig = createAction("setPortingProjectConfig")<SetPortingProjectConfig>()

export interface SetCardNumberPayload {
    cardType: string
    number: number
}
export const setCardNumber = createAction("setCardNumber")<SetCardNumberPayload>()

export const setCardNumberSuccess = createAction("setCardNumberSuccess")<SetCardNumberPayload>()

export const removePortedSolution = createAction("removePortedSolution")<string>()

export const setAllPortingProjectConfig = createAction("setAllPortingProjectConfig")<SolutionToPortingProjects>()

export interface PortProjectRequestPayload {
    targetFramework: string
    nugetPackageUpgrades: { [packageId: string]: string }
}
export const portProjects = createAsyncAction("portProject_Request", "portProject_Success", "portProject_Failure")<PortProjectRequestPayload, void, Error>()
