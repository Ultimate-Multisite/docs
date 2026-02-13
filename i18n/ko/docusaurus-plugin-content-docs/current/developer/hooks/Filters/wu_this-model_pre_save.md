---
id: wu_this-model_pre_save
title: '필터 - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# 필터: wu_${this->model}_pre_save

데이터베이스에 저장되기 전에 객체 데이터를 필터링합니다.

## 매개변수

| 이름 | 유형 | 설명 |
|------|------|------|
| $data | `array` | 저장될 객체 데이터(직렬화된 형태). |
| $data_unserialized | `array` | 저장될 객체 데이터. |
| $this | `\Base_Model` | 객체 인스턴스. |

### 버전

- 2.0.0

### 소스

[inc/models/class-base-model.php 파일의 570번째 줄에 정의됨](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570)
