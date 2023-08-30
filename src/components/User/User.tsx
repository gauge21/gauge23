import { useContext } from 'react'
import { useData } from '@microsoft/teamsfx-react'
import { TeamsFxContext } from "../Context"


export function User() {
    const { teamsUserCredential } = useContext(TeamsFxContext);
    const { loading, data, error } = useData(async () => {
      if (teamsUserCredential) {
        const userInfo = await teamsUserCredential.getUserInfo();
        return userInfo;
      }
    });
    const userName = loading || error ? "" : data!.displayName;

    return userName;
}

