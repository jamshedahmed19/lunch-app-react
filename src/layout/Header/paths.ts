import { SvgIconComponent } from "@mui/icons-material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import { paths } from "../../routes/paths";

export interface IPath {
  name: string;
  path: string;
  icon: SvgIconComponent;
}



export const SIDEBAR_PATHS: IPath[] = [
    {name: "Dashboard", path: paths.dashboard, icon: DashboardIcon},
    {name: "Lunch", path: paths.lunch, icon: FastfoodRoundedIcon},
];