       set -x
       STR='DEV'
       PLANNER_TEAM='POS'
       DRIVER_TEAM='DFS'
       DESIGN_TEAM='DES'
       DEVOPS_TEAM='DEV'
       case $STR in
         *"$PLANNER_TEAM"*)
           echo '::set-output name=testers::${{ inputs.testers-planner }}'
           ;;
         *"$DRIVER_TEAM"*)
           echo '::set-output name=testers::${{ inputs.testers-driver }}'
           ;;
         *"$DESIGN_TEAM"*)
           echo '::set-output name=testers::${{ inputs.testers-design }}'
           ;;
         *"$DEVOPS_TEAM"*)
           echo '::set-output name=testers::${{ inputs.testers-devops }}'
           ;;
       esac