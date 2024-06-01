import json
import pandas as pd
import matplotlib.pyplot as plt

# JSON ファイルを読み込み
with open('issue_metrics.json') as f:
    data = json.load(f)

# 必要なデータを DataFrame に変換
df = pd.DataFrame(data)

# データをグラフ化（例：プルリクエストの数を日ごとに表示）
df['created_at'] = pd.to_datetime(df['created_at'])
df.set_index('created_at', inplace=True)
df.resample('D').size().plot(kind='line')

# グラフを保存
plt.title('Number of Pull Requests Created per Day')
plt.xlabel('Date')
plt.ylabel('Number of PRs')
plt.savefig('issue_metrics.png')
