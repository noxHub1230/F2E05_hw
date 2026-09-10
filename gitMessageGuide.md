## Commit前綴規範：
- refactor：重構等級的大型變動。
- fix：錯誤修復。
- feat：功能/元件新增。
- chore：其他。

## 操作規範：
- 撰寫新作業進來之前要先
```git checkout (日期)```

等確定完沒問題再合併進主分支(設定為Github Page的那一個分支)
```
git switch (欲合併分支名稱)
git merge (目標分支名稱)
```
- 回溯至以往的節點
```git checkout (目標節點的commit ID)```
