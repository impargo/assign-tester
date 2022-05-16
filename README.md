This action create a comment on the pull request after it is approved, the comment contains the review checklist for the QA tester, also it randomly choose the QA tester from each squad, based on the branch title. and if the pull request already has a QA tester, it will silently skip.

### Usage

>      - uses: actions/checkout@v2
>      - uses: impargo/assign-tester@v4
