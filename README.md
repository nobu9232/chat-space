# README
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, unique: true|
|email|string|null: false, unique: true|
|timestamps|
|group_id|integer|

### association
- has_many :messages
- has_many :groups
- has_many :groups, through: :members


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|message|text|nul: false|
|image|text|
|timestamps|
|user_id|integer|

### association
- belongs_to :user


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|

### association
- has_many :users, through: :members
- belongs_to :user


## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### association
- belongs_to :user
- belongs_to :group
