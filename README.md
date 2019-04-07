# README
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, unique: true|
|email|string|null: false, unique: true|
|group_id|integer|

### association
- has_many :messages
- has_many :groups, through: :members


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|message|text|nul: false|
|image|text|
|user_id|integer|

### association
- belongs_to :user


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|

### association
- has_many :users, through: :members


## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### association
- belongs_to :user
- belongs_to :group
